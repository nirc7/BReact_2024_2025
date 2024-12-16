
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import MenuPage from './Pages/MenuPage';
import User from './Pages/User';

function App() {

  let num=7;

  return (
    <>
      <h1>Router Demo</h1>
      <div className="card">
      

        <Link to="/" >Home</Link> | <Link to="/about" >About</Link> | <Link to={"/menu/" + num}>Menu</Link>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu/:userId' element={<MenuPage />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </div>
    </>
  )
}

export default App
