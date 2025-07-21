import "./TabButton.css"

export default function TabButton({children, onClick, isClicked}) {
    return (<li className={isClicked && "active"} onClick={onClick}>{children}</li>)
}