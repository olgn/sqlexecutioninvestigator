import React from 'react'
import Panel from '../../../elem/layout/Panel'

const QueryInformation = ({ statementInfo }) => (
    <Panel title={'Query Information'}>
        <div className="container">
            <div className="level has-text-centered">
                {statementInfo.map((x, idx) => (
                    <div className="level-item" key={`level-${idx}`}>
                        <div>
                            <p className="heading">
                                <b>{x.label}</b>
                            </p>
                            <p className="title">{x.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Panel>
)

export default QueryInformation