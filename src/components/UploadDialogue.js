import React, { useContext } from 'react'
import { UploadContext } from './UploadContext'

const UploadDialogue = () => {
    const { onUploadSubmit, uploadedFile, setUploadedFile } =
        useContext(UploadContext)

    return (
        <div>
            {uploadedFile ? (
                <div className="reset">
                    <button onClick={() => setUploadedFile(null)}>Reset</button>
                </div>
            ) : (
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        return onUploadSubmit(e)
                    }}
                >
                    <input className="" type="file" accept="text/xml" />
                    <button type="submit">Upload</button>
                </form>
            )}
        </div>
    )
}

export default UploadDialogue
