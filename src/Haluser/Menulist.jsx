import './homestyle.css'
import Navbarin from "../../Components/Navbarin";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios'

function Menulist(){
    const [product,setProduct] = useState([])
    useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res => setProduct(res.data))
    .catch(err => console.log(err));
  },[])
    return(
        <>
        <Navbarin />
            {/* Menu */}
            <section className="menusection">
            <div className="cafelist">
                {product.map((data, i) => (
                    <div className="card" key={i} >
                    <img src={'http://localhost:8081/image/' + data.filepro} alt="" />
                    <div className="cafedes">
                        <div className="firstdes">
                            <div className="cafename">{data.name}</div>
                            <p style={{lineHeight: 0}}>Rp.{data.price}</p>
                            <div className="caferat">
                                Rating 4,5   
                                <span className="fa fa-star checked" style={{color: '#fcb040'}}></span>
                                <span className="fa fa-star checked" style={{color: '#fcb040'}}></span>
                                <span className="fa fa-star checked" style={{color: '#fcb040'}}></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="seconddes"><Link to={`cart/${data.id_pro}`}>ORDER</Link></div>
                    </div>
                </div>
                ))}
            
                
            </div>
            </section>

        </>
    )
}
export default Menulist
