import React from 'react'
import Panel from '../../../elem/layout/Panel'

export default ({ statementText }) => (
    <Panel title="Query Statement">
        <div className="container">
            <p>{statementText}</p>
        </div>
    </Panel>
)