export const TimeDisplay=()=>{
    return(
      <div className="time">
        <div>
          <input type="text" id="minutes" disabled />
        </div>
          <div>:</div>
        <div>
          <input type="text" id="seconds" disabled />
        </div>
      </div>
    )
}