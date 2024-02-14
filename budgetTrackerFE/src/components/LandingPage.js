import React from 'react';
import HeaderRow from './Header/Container';
import RowHeader from './RowHeader';
import RowTable from './RowTable';
import RowVisualisation from './RowVisualisation';
import IncomeData from '../MockData/MOCK_DATA_Income.json';
import ExpensesData from '../MockData/MOCK_DATA_Expenses.json';



const LandingPage = () => {
    return (
        <React.Fragment>
            <section>
                <div className="mainLayout">
                    <div className="headerRow">
                        <HeaderRow />
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