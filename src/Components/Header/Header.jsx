import { HeaderButton } from '../HeaderBtn/HeaderBtn'
import './header.css'
import graph from '../../assets/icons/graph.png';
import Settings from '../../Containers/SettingsPart';
import check from '../../assets/icons/check.png'

const Header = () => {
    return (
        <>
            <div className="header-wrap">
                <div className="header-content">
                    <div>
                    <img className='check' src={check} alt="" />
                    <h1 className="header-title">Pomofocus</h1>
                    </div>
                    {/* <h1 className="header-title">Pomofocus</h1> */}
                    <div className="btn-wrap">
                        <HeaderButton title="Report" icon={graph} />
                        <Settings />
                    </div>
                </div>
            </div>

        </ >
    )
}
export default Header;