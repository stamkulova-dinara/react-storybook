import { useDispatch } from 'react-redux';
import '../../assets/styles/contentbtn.css'
import { changeTheme } from '../../store/actionTypes';

const ContentBtns = ({ color, title, active }) => {
	const dispatch = useDispatch();
	const changingTheme = () => dispatch(changeTheme(color));

	return (
		<>
			<button id="content-btn" className={active} onClick={changingTheme}>
				{title}
			</button>
		</>
	);
};
export default ContentBtns;
