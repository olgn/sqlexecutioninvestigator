import React from 'react'
import Panel from '../../../elem/layout/Panel'
import StatementRow from './StatementRow'

const StatementList = ({ statements, onClick }) => (
    <Panel title="Query Statements">
        <div className="container max-fullwidth">
            {statements.map((statement, idx) => (
                <StatementRow
                    key={`statement-${idx}`}
                    idx={idx}
                    statement={statement}
                    onClick={onClick}
                />
            ))}
        </div>
    </Panel>
)

export default StatementList
