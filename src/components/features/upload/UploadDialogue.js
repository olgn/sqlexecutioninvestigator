import React, { useContext } from 'react'
import { UploadContext } from '../../wrappers/UploadContext'

const UploadDialogue = () => {
    const { onUploadSubmit, uploadedFile, updateFileName, fileName } =
        useContext(UploadContext)

    if (!!uploadedFile) {
        return null
    }

    return (
        <section className="section uploadSection">
            <div className="container">
                <form
                    className="form"
                    onSubmit={(e) => {
                        e.preventDefault()
                        return onUploadSubmit(e)
                    }}
                >
                    <div className="field is-grouped is-fullwidth">
                        <div className="control file is-link is-light is-medium is-fullwidth is-expanded">
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
                            <button className="button is-link is-medium is-light" istype="submit">
                                Upload
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default UploadDialogue
