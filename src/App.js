import UploadContextProvider from './components/wrappers/UploadContext'
import UploadDialogue from './components/features/upload/UploadDialogue'
import Diagnosis from './components/features/diagnosis/Diagnosis'

function App() {
    return (
        <div className="App">
            <UploadContextProvider>
                <UploadDialogue />
                <Diagnosis />
            </UploadContextProvider>
        </div>
    )
}

export default App
