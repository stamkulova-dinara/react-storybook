import { CHANGE_THEME, CHANGE_TIMER_VALUE } from "../actions"

const initState ={
    changeTheme: 'pomodoro',
    btnToggle: "START",
    timer: {
            pomodoro:25,
            shortbreak:5,
            longbreak: 15,
            interval: 4,
            autobreak: false,
			autostart: false
        },
    title: 'Pomodoro'
}

export const pomodoroApp =(state=initState, action)=>{
    switch(action.type){
        case CHANGE_THEME:
            return {...state, changeTheme:action.color, title: action.title  }
        case CHANGE_TIMER_VALUE:
            return {...state, timer: action.timer}
            default: 
        return state;
    }
}