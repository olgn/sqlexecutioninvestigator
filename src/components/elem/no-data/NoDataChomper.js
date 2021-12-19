import React from 'react'

import svg from './loading.svg'

export default () => (
    <div className="hero">
        <div className="hero-body">
            <div className="container is-flex is-justify-content-center">
                <div>
                    <img className="image is-128x128" src={svg} />
                </div>
            </div>
        </div>
    </div>
)