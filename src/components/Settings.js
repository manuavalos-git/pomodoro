import { FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,ThemeProvider} from '@mui/material'
import {theme} from '../services/functions';

export default function Settings({settingsOnChange,onClick}) {

    return (

        <ThemeProvider theme={theme}>
            <FormControl style={{alignItems:'center'}}>
                <FormLabel style={{color:"#09A65A"}} id="demo-radio-buttons-group-label">Select Pomodoro duration</FormLabel>
                    <RadioGroup row aria-labelledby="demo-radio-buttons-group-label"  name="radio-buttons-group">
                        <FormControlLabel  onChange={settingsOnChange} value="15" control={<Radio />} label="15 min" />
                        <FormControlLabel  onChange={settingsOnChange} value="25" control={<Radio />} label="25 min" />
                        <FormControlLabel  onChange={settingsOnChange} value="5" control={<Radio />} label="5 min" />
                    </RadioGroup>
                <button  onClick={onClick}>Set</button>
            </FormControl>
        </ThemeProvider>
    
    )
}