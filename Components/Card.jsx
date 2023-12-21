import './Navfoot.css'
import image from '../src/Haluser/Img/cafe/1.png'
import { Link } from 'react-router-dom'

function Card(){
    return(
        <div className="card">
                <img src={image} alt=""/>
                <div className="cafedes">
                    <div className="firstdes">
                        <div className="cafename">MALAKA CAFE</div>
                        <div className="caferat">
                            Rating 4,5
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>
                    <div className="seconddes"><Link to={'/Menulist'}>Visit</Link></div>
                </div>
        </div>
    )
}

export default Card