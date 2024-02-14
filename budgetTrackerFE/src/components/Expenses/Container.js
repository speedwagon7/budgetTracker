import React from 'react'
import Header from './Header'
import Table from './Table'
import Visualisation from './Visualisation'

const Container = () => {
    return (
        <React.Fragment>
            <section>
                <div className="expensesLayout">
                    <div className="expensesHeader">
                        <Header />
                    </div>
                    <div className="rowContent">
                        <Table />
                        <Visualisation />
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}

export default Container