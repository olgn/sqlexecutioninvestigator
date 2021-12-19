import React from 'react'

export default ({ onClick, text }) => (
    <button
        className="button is-link is-light is-medium"
        onClick={() => onClick()}
    >
        <i className="fas fa-step-backward mr-3"></i>
        {text}
    </button>
)
