import './App.css'
import ClassComp from './Class'
import ErrorBoundary from './ErrorBoundary'
import Func from './Func'

function App() {
  const newData="this is prop"
  return (
    <>
    <ErrorBoundary>
        <ClassComp/>
     </ErrorBoundary>
     <Func newprop={newData}/>
    </>
  )
}

export default App
