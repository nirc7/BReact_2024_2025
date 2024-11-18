import './App.css'
import CCParent from './ClassComps/CCParent'
import CCStudent from './ClassComps/CCStudent'
import EHeader from './Elements/EHeader'
import FCPerson from './FuncComps/FCPerson'

function App() {

  return (
    <>
      {EHeader}
      <h1>Vite + React</h1>
      <div className="card">
        <CCParent/>
        <CCStudent id={1} name="avi" grade={100}/>
        <CCStudent id={2} name="benny" grade={99}/> <br />
        <FCPerson id={1} name="avi" />
        <FCPerson id={2} name="benny" />
        <FCPerson id={3} name="cahrlie" />
      </div>
      {EHeader}
    </>
  )
}

export default App
