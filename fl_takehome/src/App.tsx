import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './tailwind.css'
import { Infobar,StudentData,Info } from './Infobar'
import { RouteMap} from './RouteMap'
import { SignOut } from './SignOut'
import { VehicleMap,BusInfo } from './VehicleMap'


function App() {
  const [count, setCount] = useState(0)
  // data would be grabbed from api call
  let james:StudentData ={
      destination:"School",
      arrival:"8:30 AM",
      driver:"Tim Stewart",
      plate:"YXF6S2"
  }

  let aidan:StudentData ={
      destination:"Home",
      arrival:"4:00 PM",
      driver:"Jeff Chen",
      plate:"JSQ4TX"
  }

  let jamesBus:BusInfo = {
    studentName:"James",
    x:4,
    y:20
  }

  let aidanBus:BusInfo = {
    studentName:"Aidan",
    x:15,
    y:28
  }

  let studentList:Array<string> = ["James Strieb","Aidan Strieb"];
  let dict = new Map<string,StudentData>();
  dict.set("James Strieb",james);
  dict.set("Aidan Strieb",aidan);

  return (
    <div>
        <div className='fixed top-5  right-3 left-3 z-20'>
          <Infobar students={studentList} lookup={dict} />
        </div>

        <VehicleMap buses={[aidanBus,jamesBus]}/>
        <RouteMap/>
        <div className='fixed z-20 bottom-5 right-10'>
          <SignOut/>
        </div>
    </div>
  )
}

export default App
