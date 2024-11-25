import './App.css'
import CCHomePage from './ClassComps/CCHomePage'

function App() {

  return (
    <>
      <div style={{
        border: '2px dashed black',
        borderRadius: 10, margin: 5,
        padding: 10
      }} className="card">
        App
        <CCHomePage />
      </div>
    </>
  )
}

export default App
