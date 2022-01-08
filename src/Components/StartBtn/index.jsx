import './startbtn.css'

const StartBtn = ({ children, onStart }) => {

    return (
        <>
            <button className="start-btn" onClick={() => {onStart()}} >
                {children}
            </button>
        </>
    )
}
export default StartBtn;