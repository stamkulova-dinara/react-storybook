import '../../assets/styles/pomodoro.css'
import ContentBtns from '../ContentBtns';
import skip from '../../assets/icons/skip.png'
import clickSound from "../../assets/audio/click.wav";
import StartBtn from '../../Components/StartBtn';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ModalWindow from '../../Components/ModalWindow';
import Confirm from '../ConfirmPart';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../store/actionTypes';
import ProgressBar from '../../Components/Progress';



const Pomodoro = () => {
	const state = useSelector((state) => state);
	const bgcolor = useSelector((state) => state.changeTheme);
	const timer = state.timer;
	const dispatch = useDispatch();

	const [minutes, setMinutes] = useState(25);
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [showModal, setModal] = useState(false);
	const [sound] = useState(new Audio(clickSound));

	const toggle = () => {
		setIsActive((prevState) => !prevState);
		sound.play();
	};

	useEffect(() => {
		if (bgcolor === "pomodoro") {
			setMinutes(timer.pomodoro);
			setSeconds(0);
			setIsActive(false);
		} else if (bgcolor === "shortbreak") {
			setMinutes(timer.shortbreak);
			setSeconds(0);
			setIsActive(false);
		} else {
			setMinutes(timer.longbreak);
			setSeconds(0);
			setIsActive(false);
		}
	}, [bgcolor, timer]);

	const myFunc = () => {
		setModal(!showModal);
		setIsActive(!isActive);
	};

	useEffect(() => {
		if (isActive) {
			let myInterval = setInterval(() => {
				if (seconds > 0) {
					setSeconds(seconds - 1);
				}
				if (seconds === 0) {
					if (minutes === 0) {
						clearInterval(myInterval);
					} else {
						setMinutes(minutes - 1);
						setSeconds(59);
					}
				}
			}, 1000);
			if (seconds === 0 && minutes === 0 && bgcolor === "pomodoro") {
				clearInterval(myInterval);
				dispatch(changeTheme("shortbreak"));
				setIsActive(!isActive);
			} else if (seconds === 0 && minutes === 0 && bgcolor === "shortbreak") {
				clearInterval(myInterval);
				dispatch(changeTheme("pomodoro"));
				setIsActive(!isActive);
			} else if (seconds === 0 && minutes === 0 && bgcolor === "longbreak") {
				setIsActive(!isActive);
				clearInterval(myInterval);
			}
			if (isActive) {
				setModal(false);
			}

			return () => {
				clearInterval(myInterval);
			};
		}
	}, [isActive, seconds]);

	const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
	const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

	return (
		<div>
			<ProgressBar />
			<div className="content-wrap">
				<div className="content-block">
					<div className="content-btn">
						<ContentBtns title="Pomodoro" color="pomodoro" active="pomodoro" />
						<ContentBtns
							title="Short Break"
							color="shortbreak"
							active="shortbreak"
						/>
						<ContentBtns
							title="Long Break"
							color="longbreak"
							active="longbreak"
						/>
					</div>
					<div className="pomodoro-timer">
						{timerMinutes}:{timerSeconds}
					</div>
					<div className="pomodoro-start">
						<StartBtn onStart={toggle}>{isActive ? "STOP" : "START"}</StartBtn>
						{isActive ? (
							<div
								className="pomodoro-skip"
								onClick={() => {
									myFunc();
								}}
							>
								<button>
									<img src={skip} alt="" />
								</button>
							</div>
						) : (
							""
						)}
					</div>
					{showModal ? (
						<ModalWindow
							clickModal={() => { myFunc() }}>
							<Confirm
								onClose={() => { myFunc() }} />
						</ModalWindow>
					) : ("")}
				</div>
			</div>
		</div>
	);
};

export default Pomodoro;