import Logo from "./Images/Logo.png"

export function Navbar() {
    return (
        <div className="nav navbar navbar-expand-lg fixed-top">
            <a href="#"><img className="nav-logo" src={Logo} alt="logo" title="QuizWise" /></a>
            <h3>QuizWise</h3>
            <div className="navlinks">
                <a href="#home" title="Home" className="navbar-brand">Home</a>
                <a href="" title="My Quiz" className="navbar-brand">My Quiz</a>
            </div>
        </div>
    )
}