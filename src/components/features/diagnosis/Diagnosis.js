import React, { useContext, useMemo, useState, useCallback, useEffect } from 'react'

import AnalysisPage from './analysis/AnalysisPage'

import { UploadContext } from '../../wrappers/UploadContext'
import { getStatementData } from '../../../functions/diagnosis'
import StatementPage from './statements/StatementPage'
import NoDataChomper from '../../elem/no-data/NoDataChomper'

const Diagnosis = () => {
    const { uploadedFile } = useContext(UploadContext)
    const [activeStatement, setActiveStatement] = useState(null)

    const statementData = useMemo(
        () => getStatementData(uploadedFile),
        [uploadedFile]
        )
        const clearActiveStatement = useCallback(() => {
            setActiveStatement(null)
        }, [setActiveStatement])
        
    // if the uploaded file gets cleared, remove active statement
    // information
    useEffect(() => {
        if (!uploadedFile) {
            clearActiveStatement()
        }
    }, [uploadedFile, clearActiveStatement])

    // exit early if there is no statement data
    if (!(statementData && statementData.length)) {
        return <NoDataChomper />
    }

    // if we have selected a statement, display analysis page
    // otherwise, show the list of statement rows
    return (
        <div className="diagnosis">
            {activeStatement && <AnalysisPage statement={activeStatement} back={clearActiveStatement}/>}
            {!activeStatement && <StatementPage statementData={statementData} rowClick={setActiveStatement} />}
        </div>
    )
}

export default Diagnosis
