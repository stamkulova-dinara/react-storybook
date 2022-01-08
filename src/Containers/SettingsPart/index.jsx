import '../../assets/styles/settings.css';
import remove from '../../assets/icons/remove.png'
import { useState } from 'react';
import ModalWindow from '../../Components/ModalWindow';
import { HeaderButton } from '../../Components/HeaderBtn/HeaderBtn';
import settings from '../../assets/icons/setting.png'
import { useDispatch } from 'react-redux';
import { changeTimerValue } from '../../store/actionTypes';
import { useSelector } from 'react-redux';

const Settings = () => {
	const [modal, setModal] = useState(false);
	const dispatch = useDispatch()
	const timer = useSelector(state => state.timer)

	const toggleModal = () => {
		setModal(!modal)
	}

	const [Pomodoro, setPomodo] = useState(25);
	const [shortBreak, setShortBreak] = useState(5)
	const [longBreak, setLongBreak] = useState(15)
	const [timerInterval, setTimerInterval] = useState(4)
	const [autoBreak, setAutoBreak] = useState(false);
	const [autoStartPomodoro, setAutoStartPomodoro] = useState(false)


	const changeValues = () => {
		const timer = {
			pomodoro: Pomodoro,
			shortbreak: shortBreak,
			longbreak: longBreak,
			interval: timerInterval,
			autobreak: autoBreak,
			autostart: autoStartPomodoro,
		};

		dispatch(changeTimerValue({ timer }));
		setModal(!modal);
	};

	const inputHandler = (event) => {
		if (event.target.name === 'pomodoro') {
			setPomodo(event.target.value)
		} else if (event.target.name === 'shortbreak') {
			setShortBreak(event.target.value)
		} else {
			setLongBreak(event.target.value)
		}
	}

	return (
		<>
			<HeaderButton title="Settings" icon={settings} onClick={toggleModal} />
			{modal && (
				<ModalWindow clickModal={toggleModal}>
					<div className="modal-block-wrap">
						<div className="settings-wrap" >
							<h2>Timer Setting</h2>
							<img src={remove} alt="" onClick={toggleModal} />
							<hr />
							<p>Timer (minutes)</p>
							<div className="modal-settings">
								<div>
									<h3>Pomodoro</h3>
									<input
										name='pomodoro'
										min="0"
										defaultValue={timer.pomodoro}
										onChange={(event) => { inputHandler(event) }}
										type="number" />
								</div>
								<div>
									<h3>Short Break</h3>
									<input
										name='shortbreak'
										min="0"
										defaultValue={timer.shortbreak}
										onChange={(event) => { inputHandler(event) }}
										type="number" />
								</div>
								<div>
									<h3>Long Break</h3>
									<input
										name='longbreak'
										min="0"
										defaultValue={timer.longbreak}
										onChange={(event) => { inputHandler(event) }}
										type="number" />
								</div>
							</div>
							<hr />
							<div className="auto1">
								<div className="auto2">
									<div className="auto3">
										<span className="auto_span">Auto start Breaks?</span>
									</div>
									<div className={autoBreak ? 'auto_btnon' : "auto_btn"} onClick={() => setAutoBreak(!autoBreak)}>
										<div className={autoBreak ? 'auto_circleon' : "auto_circle"}></div>
									</div>
								</div>
							</div>
							<hr />
							<div className="auto1">
								<div className="auto2">
									<div className="auto3">
										<span className="auto_span">Auto start Pomodoros?</span>
									</div>
									<div className={autoStartPomodoro ? 'auto_btnon' : "auto_btn"} onClick={() => setAutoStartPomodoro(!autoStartPomodoro)}>
										<div className={autoStartPomodoro ? 'auto_circleon' : "auto_circle"}></div>
									</div>
								</div>
							</div>
							<hr />
							<div className="auto1">
								<div className="long_break">
									<div className="long_break2">
										<span className='long_span'>Long Break interval</span>
									</div>
									<input
										type="number"
										min="1"
										step="1"
										width="70"
										className="long_input"
										defaultValue={timerInterval}
										onChange={(event) => setTimerInterval(event.target.value)}
									/>
								</div>
							</div>
							<div className='ok_btn'>
								<button onClick={changeValues}>OK</button>
							</div>
						</div>
					</div>
				</ModalWindow>
			)}
		</>
	)
}

export default Settings;
