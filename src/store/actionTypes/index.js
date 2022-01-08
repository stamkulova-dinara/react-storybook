import { CHANGE_THEME, CHANGE_TIMER_VALUE} from "../actions";

export const changeTheme =(color)=>({
    type: CHANGE_THEME,
    color: color,
   
})

export const changeTimerValue =({timer})=>({
    type: CHANGE_TIMER_VALUE,
    timer
})
