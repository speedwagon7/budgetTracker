import React, { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";
import { fetchBudgetCategories } from "../../Api/Expenses"; //
import "../../Styles/Table.css";

const RowTable = ({ className }) => {
  const [expensesData, setExpensesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBudgetCategories();
        setExpensesData(response);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = expensesData.length > 0 ? Object.keys(expensesData[0]) : [];

  if (loading) {
    return (
      <div className="question-loading">
        <h1 className="loading-title">Loading...</h1>
        <BarLoader
          className="scale-loader"
          color="#3498db"
          size={21}
          margin={49}
        />
      </div>
    );
  }

  return (
    <div>
      <table className={`dynamic-table ${className || ""}`}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expensesData.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RowTable;
