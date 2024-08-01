import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'

function App() {

  return (
    <>
    
    <Header/>

    <div className='container mt-5'>
        <Outlet />
    </div>

    </>
  )
}

export default App
