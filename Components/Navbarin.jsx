import './Navfoot.css'

function Navbarin(){
    
    
    return(
        
        <div className="navbar">
            <div className="logo">
                <div className="firstlogo">Pesen</div>
                <div className="secondlogo">In</div>
            </div>
            <div className="centernav">Dine In Shopping Cart</div>
            <div className="sidebutton">
                <div className="firstbutton"><a href="history.html" >History</a></div>
                <div className="firstbutton"><a href="cartmenu.html" style={{color : '#fcb040'}}><i className="fa fa-shopping-cart"></i></a></div>
                <div className="firstbutton"><a href="cafe.html"><i className="fa fa-angle-left"></i></a></div>
            </div>
        </div>
    );
}
export default Navbarin