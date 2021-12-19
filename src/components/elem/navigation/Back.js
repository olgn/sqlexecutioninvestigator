import React from 'react'

const Back = ({ onClick, text }) => (
    <button
        className="button is-link is-light is-medium"
        onClick={() => onClick()}
    >
        <i className="fas fa-step-backward mr-3"></i>
        {text}
    </button>
)

export default Back