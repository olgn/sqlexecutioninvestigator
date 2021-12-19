import React, { useContext } from 'react'
import { UploadContext } from '../../../wrappers/UploadContext'

export default () => {
    const { fileName, clearFileName } = useContext(UploadContext)
    return (
        <div className="section p-0 pb-6">
            <div className="level is-small">
                <div className="level-left">
                    <div className="level-item">
                        <div>
                            <p className="subtitle">
                                <button
                                    className="button is-link is-light is-medium"
                                    onClick={() => clearFileName()}
                                >
                                    Choose a Different Execution Plan
                                </button>
                            </p>
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <p className="subtitle">
                                {/* Showing diagnosis of execution plan: {` `} */}
                                <b>{fileName}</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <p className="title">Query Analysis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
