import React from 'react';
import DateContainer from './DateContainer';
import TotalContainer from './TotalContainer';
import RowHeader from './RowHeader';
import RowTable from './RowTable';
import RowVisualisation from './RowVisualisation';
import IncomeData from '../mockData/MOCK_DATA_Income.json';
import ExpensesData from '../mockData/MOCK_DATA_Expenses.json';



const LandingPage = () => {
    return (
        <React.Fragment>
            <section>
                <div className="mainLayout">
                    <div className="headerRow">
                        <div className="rowObject dateContainer">
                            <DateContainer content="January" />
                        </div>
                        <div className="rowObject incomeHeader total">
                            <TotalContainer content="Total Income" className="incomeHeader" />
                        </div>
                        <div className="rowObject expensesHeader total">
                            <TotalContainer content="Total Expenses" className="expensesHeader" />
                        </div>
                        <div className="rowObject savingsHeader total">
                            <TotalContainer content="Total Savings" className="savingsHeader" />
                        </div>
                        <div className="rowObject">
                            <TotalContainer content="User" className="userMenu" />
                        </div>
                    </div>
                    <div className="mainRow">
                        <div className="incomeHeader">
                            <RowHeader headerText="Income" />
                        </div>
                        <div className="rowContent">
                            <div className="dataTable rowObject">
                                <RowTable data={IncomeData} className="incomeTable" />
                            </div>
                            <div className="rowObject">
                                <RowVisualisation />
                            </div>
                        </div>
                    </div>
                    <div className="mainRow">
                        <div className="expensesHeader">
                            <RowHeader headerText="Expenses" />
                        </div>
                        <div className="rowContent">
                            <div className="dataTable rowObject">
                                <RowTable data={ExpensesData} className="expensesTable" />
                            </div>
                            <div className="rowObject">
                                <RowVisualisation />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default LandingPage