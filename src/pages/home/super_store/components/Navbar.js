
import phoneIcon from "./telephone.png"
import mailIcon from "./email.png"
import "./Navbar.css"
function Navbar() {
    
    return (
        <header>
            <div className="contact">
                <div className="phone">
                    <img src={phoneIcon} alt="" />
                    <p>+88012 3456 7894</p>
                </div>
                <div className="mail">
                    <img src={mailIcon} alt="" />
                    <p>support@ui-lib.com</p>
                </div>  
            </div>
            <nav>
                <ul className="nav_links" alt>
                    <li><a className="nav-link" href="#">ThemeFAQ"s</a></li>
                    <li><a className="nav_link" href="#">Need Help?</a></li>
                    <li><b>EN</b></li>
                    <li><b>USD</b></li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Navbar;