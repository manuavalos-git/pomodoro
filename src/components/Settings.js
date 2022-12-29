import { FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,ThemeProvider} from '@mui/material'
import {theme} from '../services/functions';

export default function Settings(params) {
    const [setMinutes,setSeconds,setClicked,setChange,change]=params.props
    return (

        <ThemeProvider theme={theme}>
        <FormControl style={{alignItems:'center'}}>
            <FormLabel style={{color:"#09A65A"}} id="demo-radio-buttons-group-label">Select Pomodoro duration</FormLabel>
            <RadioGroup row aria-labelledby="demo-radio-buttons-group-label"  name="radio-buttons-group">
                <FormControlLabel  onChange={(event)=>{setMinutes(event.target.value);setChange(!change);setSeconds(0)}} value="15" control={<Radio />} label="15 min" />
                <FormControlLabel  onChange={(event)=>{setMinutes(event.target.value);setChange(!change);setSeconds(0)}} value="25" control={<Radio />} label="25 min" />
                <FormControlLabel  onChange={(event)=>{setMinutes(event.target.value);setChange(!change);setSeconds(0)}} value="5" control={<Radio />} label="5 min" />
            </RadioGroup>
            <button  onClick={()=>{setClicked(false)}}>Set</button>
        </FormControl>
    </ThemeProvider>
    
    )
}