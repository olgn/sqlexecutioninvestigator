import React from 'react'

const StatementRow = ({ statement, onClick }) => {
    console.log('statement:', statement)
    return (
        <div className="" onClick={() => onClick(statement)}>
            statement x
        </div>
    )
}

export default StatementRow