import React from 'react'
import Back from '../../../elem/navigation/Back'

const Header = ({ back }) => (
    <div className="section p-0 pb-6">
        <div className="level is-small">
            <div className="level-left">
                <div className="level-item">
                    <p className="subtitle">
                        <Back
                            onClick={back}
                            text={`Return to Statement List`}
                        />
                    </p>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    <p className="title">
                        Query Analysis
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Header
