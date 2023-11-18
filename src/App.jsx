
import './App.scss'

import About from './components/About/About';
import BottomBar from './components/BottomBar/BottomBar';

import Home from './components/Home/Home';



function App() {

  

  return (
    <>
      <div className='main'>
        <div className='container'>

          <Home/>  
          <About />
          <button  className='appointment-btn'>
            Book Appointment
          </button>    
        </div>
      </div> 

      <BottomBar />

      
    </>
  )
}

export default App
