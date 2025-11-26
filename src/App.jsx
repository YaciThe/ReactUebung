import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Title } from './Title'
import { Card } from './components/Card/Card.jsx'
import { Rooms } from './components/Smarthome/Rooms.jsx'
import living from './assets/living.png'
import bed from './assets/bed.png'
import kitchen from './assets/kitchen.png'
import { GetData } from './components/GetData/GetData.jsx'
import { Destination } from './components/Vacation/Destination.jsx'

function App() {
  const [count, setCount] = useState(2)
  const [value, setValue] = useState ('')
  const [result, setResult] = useState ("")
  


  useEffect( () => {
    // hier definiere ich dass mein value das sein soll, worauf reagiert wird
    setResult (value * 2)

  }, [value]);

  
  
  return (
    <>


    <div>
      <Destination />
    </div>


    
    <div>
      <GetData />
    </div>
    <div className="multiplier">
          <input onChange={(e) => setValue (e.target.value)} />
      </div>
  <div>You entered {value}, mulitplied by 2, that equals {result}</div>


  <div className="SmartHomeApp">
    <Rooms 
      roomname = "Living Room"
      icon = {living}
      temperature = "25"
      lightstatus = "On"
    />

     <Rooms 
      roomname = "Bedroom"
      icon = {bed}
      temperature = "18"
      lightstatus = "Off"
    />

    <Rooms 
      roomname = "Kitchen"
      icon = {kitchen}
      temperature = "20"
      lightstatus = "On"
    />

    </div>




    <Card
      logo = {reactLogo}
      title = "das mein titel"
      link = "https://react.dev" 
      linktext = "das mein linktext"
    />


    <Title title="hello" /> 
    <Title title="Hi and welcome"></Title>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>


      <div className="multiplier">
          <input onChange={(e) => setValue (e.target.value)} />
      </div>
      <div className="text">
        Yout entered {value} multiplied by 2, that equals {value * 2}
      </div>





      <div className="card">
        <button onClick={() => setCount((count) => count * 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

//export default ermöglicht beim importieren freie namenswahl, ist aber unnötig, normales export verlangt den identischen Namen
