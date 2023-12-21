import './admin.css'
import { NavLink } from 'react-router-dom';

function Sidebar(){
    return(
        <div className="sidebar">
        <div className="logo">
          <div>Pesan</div>
          <div>in</div>
        </div>
        <div className="menu"><NavLink to='/Mitra'>Order History</NavLink></div>
        <div className="menu"><NavLink to='/Product'>Product</NavLink></div>
        <div className="menu"><NavLink to='/profile'>Akun</NavLink></div>
      </div>
    )
}
export default Sidebar