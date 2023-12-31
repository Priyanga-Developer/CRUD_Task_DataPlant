import './App.css'
import ClassComp from './Class'
import ErrorBoundary from './ErrorBoundary'
import Func from './Func'

function App() {

  return (
    <>
    <ErrorBoundary>
        <ClassComp/>
     </ErrorBoundary>
     <Func/>
    </>
  )
}

export default App
