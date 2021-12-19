import React, { createContext, useCallback, useState } from 'react'

const UploadContext = createContext(null)

const UploadContextProvider = ({ children }) => {
    const [uploadedFile, setUploadedFile] = useState(null)

    const onUploadSubmit = async (e) => {
        var wow = new DOMParser()
        const file = e.target[0].files[0]
        var text = await file.text()
        var xml = wow.parseFromString(text, 'text/xml')
        setUploadedFile(xml)
    }

    return (
        <UploadContext.Provider
            value={{ uploadedFile, setUploadedFile, onUploadSubmit }}
        >
            {children}
        </UploadContext.Provider>
    )
}

export default UploadContextProvider
export { UploadContext }
