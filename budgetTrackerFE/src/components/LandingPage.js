import React from 'react'
import HeaderRow from './Header/Container'
import IncomeRow from './Income/Container'
import ExpensesRow from './Expenses/Container'


const LandingPage = () => {
    return (
        <React.Fragment>
            <section>
                <div className="mainLayout">
                    <div className="headerRow">
                        <HeaderRow />
                    </div>
                    <div className="incomeRow mainRow">
                        <IncomeRow />
                    </div>
                    <div className="expensesRow mainRow">
                        <ExpensesRow />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default LandingPage