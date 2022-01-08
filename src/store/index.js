import { createStore } from "redux";
import { pomodoroApp } from "./reducers";

export const store =createStore(pomodoroApp)