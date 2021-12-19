import React from 'react'
import Header from './Header'
import StatementList from './StatementList'

const StatementPage = ({ statementData, rowClick }) =>  (
    <section className="section analysisWrapper">
        <div className="container analysis">
            <Header />
            <StatementList statements={statementData} onClick={rowClick} />            
        </div>
    </section>
)

export default StatementPage