import image2 from './Img/cafe/2.jpg'
import image3 from './Img/cafe/3.png'
import './homestyle.css'
import Card from '../../Components/Card'
import Navbarin from '../../Components/Navbarin'
import { Link } from 'react-router-dom'

function Cafelist(){
    return(
        <>
        <Navbarin />
        {/* Cafe */}
            <section className="cafe" id="cafe">
                Recomended cafe with high rating
                <h1>Cafe Recomended</h1>
                <div className="cafelist">
                    <Card />
                    <div className="card">
                <img src={image2} alt=""/>
                <div className="cafedes">
                    <div className="firstdes">
                        <div className="cafename">FATIMA CAFE</div>
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
                    <div className="card">
                <img src={image3} alt=""/>
                <div className="cafedes">
                    <div className="firstdes">
                        <div className="cafename">FOREST TREE</div>
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

                </div>
            </section>

        </>
    )
}
export default Cafelist
