import { useEffect, useState } from "react";
import Settings from "./Settings"
import { BottonSettings } from "./BottonSettings";
import { BottonStartStop } from "./BottonStartStop";
import { TimeDisplay } from "./TimeDisplay";
import { initTimer } from "../services/functions";

function Timer(){

    const [minutes,setMinutes]=useState(15)
    const [clickedSettings,setClickedSettings]=useState(false)
    const [clickedStart,setClickedStart]=useState(false)
    const [seconds,setSeconds]=useState(0)
    const [init,setInit]=useState()
    const [change,setChange]=useState(false)
   
    useEffect(()=>{
        const progressCircle=document.getElementById("ring")
        progressCircle.style.backgroundColor="#000"
        progressCircle.style.background = 
            `conic-gradient(#09A65A ${(minutes*60) * (6/minutes)}deg,#3A393F ${(minutes*60) *(6/minutes)}deg)`
        document.getElementById("minutes").value=minutes
        document.getElementById("seconds").value="00"
    },[change,minutes])

    const settingsHandler=(event)=>{
      event.preventDefault();
      setClickedSettings(!clickedSettings)
    }

    const startHandler=(event)=>{
      event.preventDefault()
      setInit(initTimer(seconds,minutes,setSeconds,setChange,change,setClickedStart))
      setClickedStart(true)
    }

    const stopHandler=(event)=>{
      event.preventDefault()
      clearInterval(init)
      setClickedStart(false)
    }
    const invertChange=()=>{
      setChange(!change)
    }

    const settingsOnChange=(event)=>{
      event.preventDefault()
      setMinutes(event.target.value)
      invertChange()
      setSeconds(0)
    }
    
    return (
        <div className="timer">
          <TimeDisplay/>
          {
            clickedSettings?
              <Settings settingsOnChange={settingsOnChange} onClick={settingsHandler} /> 
            :
              clickedStart?
                <BottonStartStop  onClick={stopHandler} text={'stop'}/>
              :
              <>
                <BottonStartStop  onClick={startHandler} text={'start'}/>
                <BottonSettings onClick={settingsHandler} />
              </>  
          }
        </div>
    )
}
export default Timer;