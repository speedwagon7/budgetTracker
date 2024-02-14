import React from 'react'
import HeaderRow from './HeaderBar'
import IncomeRow from './IncomeRow'
import ExpensesRow from './ExpensesRow'


const LandingPage = () => {
    return (
        <React.Fragment>
            <section>
                <div className="layout">
                    <div className="HeaderRow">
                        <HeaderRow />
                    </div>
                    <div className="IncomeRow">
                        <IncomeRow />
                    </div>
                    <div className="ExpensesRow">
                        <ExpensesRow />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default LandingPage