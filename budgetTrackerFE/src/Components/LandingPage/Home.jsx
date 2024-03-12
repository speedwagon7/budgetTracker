import React from 'react';
import { useState } from 'react';
import { Button} from 'react-bootstrap';
import DateContainer from './DateContainer';
import TotalContainer from './TotalContainer';
import RowHeader from './RowHeader';
import RowTable from './RowTable';
import RowVisualisation from './RowVisualisation';
import IncomeData from '../../MockData/MOCK_DATA_Income.json';
import ExpensesData from '../../MockData/MOCK_DATA_Expenses.json';
import AddExpenseForm from './AddExpenseForm';

const Home = () => {
    const [open, setOpen] = useState(false);
    const [expensesByCategory, setExpensesByCategory] = useState({});

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleExpenseAddition = (category, description, price) => {
        const updatedExpenses = { ...expensesByCategory };
        if (!updatedExpenses[category]) {
            updatedExpenses[category] = [];
        }
        updatedExpenses[category].push({description, price});
        setExpensesByCategory(updatedExpenses);
    };

    const calculateTotalForCategory = (category) => {
        if (!expensesByCategory[category]) return 0;
        return expensesByCategory[category].reduce((acc, curr) => acc + curr, 0);
    };

    return (
        <React.Fragment>
            <section>
                <div className="home-page">
                <div className="header-row">
                        <div className="row-object dateContainer">
                            <DateContainer content="January" />
                        </div>
                        <div className="row-object incomeHeader total">
                            <TotalContainer content="Total Income" className="incomeHeader" />
                        </div>
                        <div className="row-object expensesHeader total">
                            <TotalContainer content="Total Expenses" className="expensesHeader" />
                        </div>
                        <div className="row-object savingsHeader total">
                            <TotalContainer content="Total Savings" className="savingsHeader" />
                        </div>
                        <div className="row-object">
                            <TotalContainer content="User" className="userMenu" />
                        </div>
                    </div>
                    <div className="expense-row">
                        <div className="expenses-header">
                            <RowHeader headerText="Expenses" />
                        </div>
                        <div className="expense-row-content">
                            <div className="dataTable row-object">
                                <RowTable expensesByCategory={expensesByCategory} />
                                <div>
                                    <Button onClick={handleOpen}>Add Expense</Button>
                                    <AddExpenseForm open={open} handleClose={handleClose} handleExpenseAddition={handleExpenseAddition} />
                                </div>
                            </div>
                            <div className="row-object">
                                <RowVisualisation />
                            </div>
                        </div>
                    </div>
                    <div className="category-summary-row">
                        {expensesByCategory && Object.keys(expensesByCategory).map(category => (
                            <div key={category} className="row-object total">
                                <TotalContainer content={category} className="incomeHeader" />
                            </div>
                        ))}
                </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home