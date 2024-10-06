import "./navbar.scss"

function Navbar() {
    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                <img src="/logo.png" alt="" />
                <span>MapMyCampus</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="">Contact</a>
                <a href="/">Agents</a>  
                
                </div>
            <div className="right">
                <a href="/">SignIn</a>
                <a href="/" className="register">SignOut</a>
                </div>
        </nav>
    )
}

export default Navbar;
