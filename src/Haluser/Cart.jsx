import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbarin from '../../Components/Navbarin'
import './cartstyle.css'
import image4 from './Img/menu/OK.jpg'


function Cart(){
    
    return(
        <>
        <Navbarin />
        <div className="containers">
        <div className="card" >
                    <img src={image4}  alt="" />
                    <div className="cafedes">
                        <div className="firstdes">
                            <div className="cafename"></div>
                            <p style={{lineHeight: 0}}>Rp. 60.000</p>
                            <div className="caferat">
                                Rating 4,5   
                                <span className="fa fa-star checked" style={{color: '#fcb040'}}></span>
                                <span className="fa fa-star checked" style={{color: '#fcb040'}}></span>
                                <span className="fa fa-star checked" style={{color: '#fcb040'}}></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="seconddes"><Link to={`cart`}>ORDER</Link></div>
                    </div>
                </div>
            <div className="struk">
            <table>
                <thead>
                <tr>
                    <th>Menu</th>
                    <th>ORDER</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Paket 53</td>
                    <td>1</td>
                    <td>Rp. 60.000</td>
                    <td>RP 60.000</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Tax</td>
                    <td>RP. 5.000</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>RP. 65.000</td>
                </tr>
                </tbody>
                
            </table>
            <div className="confirmpay">
                <div><a href="menucafe.html">Add Menu</a></div>
                <div><Link to={'/Payment'}>Check Out</Link></div>
            </div>
        </div>
        </div>
        <Footer />
        </>

    )
}
export default Cart