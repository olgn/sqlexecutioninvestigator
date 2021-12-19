import React from 'react'

const Panel = ({ title, colorClass, children }) => (
    <article className={`panel ${colorClass ? colorClass : 'is-link'}`}>
        <p className="panel-heading">{title}</p>
        <div className="panel-block py-5">{children}</div>
    </article>
)

export default Panel