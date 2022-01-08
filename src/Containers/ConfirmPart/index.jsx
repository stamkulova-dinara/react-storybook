import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../../assets/styles/confirm.css";
import { changeTheme } from "../../store/actionTypes";

const Confirm = ({ onClose }) => {
    
    const color = useSelector((state) => state.changeTheme);
    const dispatch = useDispatch();
    const switchTheme = () => {
        if (color === "pomodoro") {
            dispatch(changeTheme("shortbreak"));
        } else if (color === "shortbreak") {
            dispatch(changeTheme("pomodoro"));
        }
        onClose();
    };
    return (
        <div className="confirm-wrap">
            <div className="confirm-inner-wrap">
                <p>Подтвердите действие на странице PomodoroTimer</p>
                <p>The timer is still running, are you sure you want to switch?</p>
            </div>
            <div className="confirm-buttons">
                <div>
                    <button className="btnOk" onClick={switchTheme}>
                        OK
                    </button>
                </div>
                <div>
                    <button className="btnNo" onClick={onClose}>
                        ОТМЕНА
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Confirm;
