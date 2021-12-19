import React, { useContext, useMemo } from 'react'
import { UploadContext } from '../../wrappers/UploadContext'
import { getExpensiveOperations } from '../../../functions/diagnosis'

const Diagnosis = () => {
    const { uploadedFile } = useContext(UploadContext)
    const expensive = useMemo(() => getExpensiveOperations(uploadedFile), [uploadedFile])
    return (
        <div className="diagnosis">
            {expensive && (
                <div>
                    <h1>Most Expensive Bits</h1>
                    <div>
                        {expensive.map((x, idx) => (
                            <div className="expenseRow" key={idx}>
                                {`${x.NodeId} -  ${x.operationType} - ${x.expense}`}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Diagnosis
