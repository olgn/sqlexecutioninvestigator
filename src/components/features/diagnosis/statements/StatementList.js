import React from 'react'
import Panel from '../../../elem/layout/Panel'
import StatementRow from '../StatementRow'

export default ({ statements, onClick }) => (
    <Panel title="Query Statements">
        <div className="container">
            {statements.map((statement, idx) => (
                <StatementRow
                    key={`statement-${idx}`}
                    statement={statement}
                    onClick={onClick}
                />
            ))}
        </div>
    </Panel>
)
