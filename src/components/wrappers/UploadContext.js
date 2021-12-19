import React, { createContext, useState, useCallback } from 'react'
import { defaults } from '../../utils/constants/files'

const UploadContext = createContext(null)

const UploadContextProvider = ({ children }) => {
    const [uploadedFile, setUploadedFile] = useState(null)
    const [fileName, setFileName] = useState(defaults.fileName)

    const updateFileName = useCallback(
        (e) => {
            const f = e.target.files[0].name
            return setFileName(f)
        },
        [setFileName]
    )
    
    const onUploadSubmit = async (e) => {
        var wow = new DOMParser()
        if (e && e.target && e.target[0] && e.target[0].files[0]) {
            const file = e.target[0].files[0]
            var text = await file.text()
            var xml = wow.parseFromString(text, 'text/xml')
            setUploadedFile(xml)
        }
    }

    const clearFileName = useCallback(() => {
        setFileName(defaults.fileName)
        setUploadedFile(null)
    }, [setFileName, setUploadedFile])

    return (
        <UploadContext.Provider
            value={{
                uploadedFile,
                setUploadedFile,
                onUploadSubmit,
                fileName,
                updateFileName,
                clearFileName,
            }}
        >
            {children}
        </UploadContext.Provider>
    )
}

export default UploadContextProvider
export { UploadContext }
