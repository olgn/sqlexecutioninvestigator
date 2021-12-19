import React from 'react'

import svg from './loading.svg'

const Chomper = () => (
    <div className="hero">
        <div className="hero-body">
            <div className="container is-flex is-justify-content-center">
                <div>
                    <img alt="pacman continously eating beans" className="image is-128x128" src={svg} />
                </div>
            </div>
        </div>
    </div>
)

export default Chomper
