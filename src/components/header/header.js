import css from "./header.css"
const Header = ()=>{
    return (
        <>
            <div className="header-div">
    
                <ul className="nav-list">
                    <u className="underline"><li>Home</li></u>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Pricing</li>
                    <li>Experience</li>
                </ul>
            </div>
        </>
    )
}
export default Header