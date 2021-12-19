import React, { useContext, useState, useCallback } from 'react'
import { UploadContext } from '../../wrappers/UploadContext'
import { defaults } from '../../../utils/constants/files'

const UploadDialogue = () => {
    const { onUploadSubmit, uploadedFile, setUploadedFile } =
        useContext(UploadContext)

    const [fileName, setFileName] = useState(defaults.fileName)

    const updateFileName = useCallback(
        (e) => {
            const f = e.target.files[0].name
            return setFileName(f)
        },
        [setFileName]
    )

    const clearFileName = useCallback(() => {
        setFileName(defaults.fileName)
        setUploadedFile(null)
    }, [setFileName, setUploadedFile])

    return (
        <section className="section">
            {uploadedFile ? (
                <div className="container">
                    <div className="level has-text-centered">
                        <div className="level-item">
                            <div>
                                <p className="heading">
                                    Showing diagnosis of execution plan: {` `}
                                    <b>{fileName}</b>.
                                </p>
                                <p className="title">
                                    <button
                                        className="button is-link"
                                        onClick={() => clearFileName()}
                                    >
                                        Choose a Different Execution Plan
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <form
                        className="form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            return onUploadSubmit(e)
                        }}
                    >
                        <div className="field is-grouped is-fullwidth">
                        <div className="control file is-fullwidth is-expanded">
                            <label className="file-label">
                                <input
                                    onChange={(e) => updateFileName(e)}
                                    className="file-input"
                                    type="file"
                                    accept="text/xml"
                                />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Choose an execution plan file...
                                    </span>
                                </span>
                                <span className="file-name has-text-centered">
                                    {fileName}
                                </span>
                            </label>
                        </div>
                            <div className="control">
                                <button
                                    className="button is-link"
                                    istype="submit"
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </section>
    )
}

export default UploadDialogue
