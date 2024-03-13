import React, { useEffect, useState } from 'react'
import { BarLoader } from "react-spinners";


const RowVisualisation = ({ className, expensesData, loading }) => {
    const columns = ["Category", "Description", "Price", "Date" ]
    const [data, setData] = useState([])
    
    useEffect(()=>{
        let tempList = []
        expensesData.forEach(cat => {
            cat.expenses.forEach((expen) => {
                tempList.push({...expen, category : cat.category.categoryName})
            })
        });
        setData(tempList)
    },[expensesData])
    
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
            {data.map((row, index) => (
              <tr key={index}>
                  <td>{row["category"]}</td>
                  <td>{row["title"]}</td>
                  <td>{row["price"]}</td>
                  <td>{row["date"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default RowVisualisation