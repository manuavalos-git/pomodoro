import { createTheme } from '@mui/material/styles'

export const theme=createTheme({
  palette:{
      primary:{
          main: "#09A65A",
          light:"#09A65A",
          dark:"#09A65A"
      },
      secondary:{
          main: "#09A65A",
          light:"#09A65A",
          dark:"#09A65A"
      },
      info:{
          main: "#09A65A",
          light:"#09A65A",
          dark:"#09A65A"
      },
      warning:{
          main: "#09A65A",
          light:"#09A65A",
          dark:"#09A65A"
      },
      success:{
          main: "#09A65A",
          light:"#09A65A",
          dark:"#09A65A"
      },
      custom:{
          main: "#09A65A",
          light:"#09A65A",
          dark:"#09A65A"
      }
  }
})

const transformSeconds=(seconds,minutesInit) =>{
    const secondsTotal=minutesInit*60
    const minutes = Math.floor((secondsTotal-seconds) / 60);
    const remainingSeconds = (secondsTotal-seconds) % 60;
    const minSec=[]
    minSec[0]=`${minutes}`
    minSec[1]=`${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`

    return minSec
}

export const initTimer=(seconds,minutes,setSeconds,setChange,change,setClickedStart)=> {
    const intervalId = setInterval(() => {
        if (seconds < minutes * 60) {
            setSeconds(++seconds)
            drawSeconds(minutes,seconds,setSeconds,false,setChange,change,setClickedStart)
        }
        else {
            drawSeconds(minutes,seconds,setSeconds,true,setChange,change,setClickedStart)
            clearInterval(intervalId);
        }
    }, 1000)
    return intervalId
}

const drawSeconds=(minutes,seconds,setSeconds,finished,setChange,change,setClickedStart)=>{
    const progressCircle=document.getElementById("ring")
    progressCircle.style.backgroundColor="#000"
    if(!finished){
        progressCircle.style.background = 
        `conic-gradient(#09A65A ${seconds * (6/minutes)}deg,#3A393F ${seconds *(6/minutes)}deg)`

        const [min,sec]=transformSeconds(seconds,minutes)
        document.getElementById("minutes").value=min
        document.getElementById("seconds").value=sec
    }
    else{
        progressCircle.style.background = 
        `conic-gradient(#D60E02 ${seconds * (6/minutes)}deg,#D60E02 ${seconds *(6/minutes)}deg)`
        setTimeout(function(){
            alert('finish time');
            setChange(!change)
        }, 100);
        setSeconds(0)
        setClickedStart(false)
    }
}

