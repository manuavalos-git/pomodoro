import img from '../images/gear.svg'

export const BottonSettings=({onClick})=>{
    return(
      <button onClick={onClick} className="settings">
    <img src={img} alt="Settings" />
    </button>
    )
  }