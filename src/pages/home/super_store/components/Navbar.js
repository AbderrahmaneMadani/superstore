
import phoneIcon from "./telephone.png"
import "./Navbar.css"
function Navbar() {
    
    return (
        <nav>
            <h1>Navbar hello</h1>
            <div className="contact">
                <img src={phoneIcon} alt="" />
                <p>+88012 3456 7894</p>
            </div>
        </nav>
    );
  }
  
  export default Navbar;