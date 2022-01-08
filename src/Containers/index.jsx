import Header from "../Components/Header/Header"
import '../assets/styles/content.css'
import Pomodoro from "./Pomodoro"
import { useSelector } from "react-redux"
import InfoContent from "../Components/InfoContent"

const Content =()=>{
  const color = useSelector(state => state.changeTheme)
  return (
    <div>
      <div className={`contain-${color}`}>
        <div className="content-wrap">
          <div className="main-content">
            <Header />
            <Pomodoro />
          </div>
        </div>
      </div>
      <InfoContent />
    </div>

  )
}

export default Content;
