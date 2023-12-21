import './sukses.css'
import { Link } from 'react-router-dom'

function Succes(){
    return(
        <>
        <div className="suksescontainer" style={{display: 'flex', justifyContent:'center', alignItems: 'center',textAlign : 'center'}}>
        <div className="sukses">
            <i class="fa fa-check-circle-o" style={{fontSize : '90px', color : '#FCB040'}}></i>
            <h1>Order successfully</h1>
            <div><Link to ="/History" style={{color : 'black'}}>History</Link></div>
            <div><Link to ="/Cafelist">Back</Link></div>
            </div>
            </div>
        </>
    )
}

export default Succes