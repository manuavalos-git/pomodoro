import { useEffect, useState } from "react";
import Settings from "./Settings"
import { initTimer } from "../services/functions";
import img from '../images/gear.svg'

function Timer(){

    const [minutes,setMinutes]=useState(15)
    const [clicked,setClicked]=useState(false)
    const [clickedStart,setClickedStart]=useState(false)
    let [seconds,setSeconds]=useState(0)
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
    
    return (
        <div className="timer">
        <div className="time">
          <div className="minutes">
            <input type="text" id="minutes" disabled />
          </div>
          <div className="colon">:</div>
          <div className="seconds" >
            <input type="text" id="seconds" disabled />
          </div>
        </div>
        {
          clicked?
          (  
            <Settings props={[setMinutes,setSeconds,setClicked,setChange,change]}></Settings>
                ) 
          :
            clickedStart?
            (<button className="start" onClick={(event)=>{clearInterval(init);setClickedStart(false)}}>stop</button>)
            :
            <>
             <button className="start" onClick={()=>{setInit(initTimer(seconds,minutes,setSeconds,setChange,change,setClickedStart));setClickedStart(true)}} id="start">start</button>
                    
                    <button onClick={(event)=>{
                        event.preventDefault();
                        clicked?setClicked(false):setClicked(true)
                        }} className="settings">
                    <img src={img} alt="Settings" />
                    </button>
            </>  
        }
        </div>
    )
}
export default Timer;