import './App.css'
import UploadContextProvider from './components/UploadContext'
import UploadDialogue from './components/UploadDialogue'
import Diagnosis from './components/Diagnosis'

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
