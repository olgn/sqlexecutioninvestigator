import React from 'react'
import CodeBlock from '../../../elem/layout/CodeBlock'
import Panel from '../../../elem/layout/Panel'

export default ({ statementText }) => (
    <Panel title="Query Statement">
        <div className="container max-fullwidth">
            <CodeBlock content={statementText} />
        </div>
    </Panel>
)