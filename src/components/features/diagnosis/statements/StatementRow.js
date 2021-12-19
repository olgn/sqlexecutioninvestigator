import React, { useState } from 'react'
import { defaults } from '../../../../utils/constants/parsing'
import CodeBlock from '../../../elem/layout/CodeBlock'

const StatementRow = ({ statement, idx, onClick }) => {
    const statementText = statement.StatementText
    const [statementExpanded, setStatementExpanded] = useState(false)

    return (
        <>
            <div className="box is-shadowless mb-0 is-fullwidth">
                <div
                    className="level is-clickable"
                    onClick={() => onClick(statement)}
                >
                    <div className="level-left">
                        <div className="level-item px-5">
                            <div>
                                <p className="heading">{`IDX`}</p>
                                <p className="title">{idx}</p>
                            </div>
                        </div>
                        <div className="level-item px-5">
                            <div>
                                <p className="heading">Statement Type</p>
                                <p className="title">
                                    {statement.StatementType}
                                </p>
                            </div>
                        </div>
                        <div className="level-item px-5">
                            <div>
                                <p className="heading">Relative Cost</p>
                                <p className="title">
                                    {
                                        statement[
                                            defaults.statementExpenseAttribute
                                        ]
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <div>
                                <p className="title">
                                    <i className="fas fa-angle-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box is-fullwidth">
                <div
                    className="level is-clickable has-background-link-light has-text-link px-5  mb-0 py-5 is-small"
                    onClick={() => setStatementExpanded(!statementExpanded)}
                >
                    <div className="level-item">
                        <div>
                            <p>
                                <span>{`${
                                    statementExpanded ? 'Hide' : 'Preview'
                                } Query`}</span>
                                <span className='ml-3'>
                                    <i
                                        className={`fas ${
                                            statementExpanded
                                                ? 'fa-caret-up'
                                                : 'fa-caret-down'
                                        } has-text-link`}
                                    ></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <CodeBlock extraClass={statementExpanded ? '' : 'is-hidden'} content={statementText}/>
            </div>
        </>
    )
}

export default StatementRow
