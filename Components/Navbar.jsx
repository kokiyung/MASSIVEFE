import './Navfoot.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar(){
    
    return(
        
    <div className="navbar">
        <div className="logo">
            <div className="firstlogo">Pesen</div>
            <div className="secondlogo">In</div>
            
        </div>
        <div className="sidebutton">
            <div className="firstbutton"><NavLink to='/'>Home</NavLink></div>
            <div className="firstbutton"><Link to='#about'>About</Link></div>
            <div className="firstbutton"><NavLink to='/cafe'>Cafe</NavLink></div>
            <div className="secondbutton"><Link to='/Loginuser'>Akun</Link></div>
        </div>
    </div>
    );
}
export default Navbar