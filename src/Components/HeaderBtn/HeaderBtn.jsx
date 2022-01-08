import './headerBtn.css'

export const HeaderButton = ({ icon, title, onClick }) => {
    return (
        <>
            <button className="header-btn" onClick={onClick}>
                <img src={icon} alt="" />
                {title}</button>
        </>
    )
}