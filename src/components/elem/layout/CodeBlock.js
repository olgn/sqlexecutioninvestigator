import React from 'react'
import hljs from 'highlight.js'

const CodeBlock = ({ content, language, extraClass }) => {
    const highlighted = language
        ? hljs.highlight(content, {language})
        : hljs.highlightAuto(content)

    return (
        <pre className={`hljs ${extraClass ? extraClass : ''}`}>
            <code
                className="hljs"
                dangerouslySetInnerHTML={{ __html: highlighted.value }}
            />
        </pre>
    )
}

export default CodeBlock