import React from 'react'

import { defaults } from '../../../../utils/constants/parsing'
import Header from './Header'
import QueryInformation from './QueryInformation'
import QueryStatisticsTable from './QueryStatisticsTable'
import QueryStatement from './QueryStatement'

const AnalysisPage = ({ back, statement }) => {
    const highLevelStatementInfo = Object.keys(statement)
        .filter((x) => !defaults.specialStatementProperties.includes(x))
        .reduce(
            (acc, curr) => [...acc, { label: curr, value: statement[curr] }],
            []
        )
    const statementText = statement.StatementText
    const tableData = statement.tableData
    return (
        <section className="section analysisWrapper">
            <div className="container analysis">
                <Header back={back} />
                <QueryStatement statementText={statementText} />
                <QueryInformation statementInfo={highLevelStatementInfo} />
                <QueryStatisticsTable tableData={tableData}/>
            </div>
        </section>
    )
}

export default AnalysisPage
