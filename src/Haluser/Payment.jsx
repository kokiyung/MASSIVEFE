import Footer from '../../Components/Footer'
import Navbarin from '../../Components/Navbarin'
import './cartstyle.css'
import Sidebar from '../../Components/Sidebarmitra.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Payment(){
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [pay, setPay] = useState('')
    const [note, setNote] = useState('')

    const navigate = useNavigate();
    function handleSubmit(event){
      event.preventDefault();
        axios.post('http://localhost:8081/payment' , {name,date,time,pay,note})
        .then(res => {
          alert('Payment successfully');
          navigate('/Succes');
          
          
        }).catch(err => console.log(err));
    }
    return(
        <>
        <Navbarin />
        <div className="containers">
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
                    <td>rashberry</td>
                    <td>1</td>
                    <td>Rp. 60.000</td>
                    <td>RP 60.000</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Tax</td>
                    <td>RP. 5000</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>RP. 65.000</td>
                </tr>
                </tbody>
                
            </table>
            
        </div>
        {/* Payment */}
        <div className="paymentmethode">
            <h1 style={{textAlign : 'center'}}>ORDER DATA</h1>
            <div className="paycard">
                <form onSubmit={handleSubmit}>
                    <label>NAME</label><br/>
                    <input type="text" placeholder="customer name" onChange={e => setName(e.target.value)} /><br/>
                    <label >Visiting Time</label><br/>
                    <input type="date" onChange={e => setDate(e.target.value)}/>
                    <input type="time" onChange={e => setTime(e.target.value)}/><br/>
                    <select name="" id="" onChange={e => setPay(e.target.value)}>
                        <option value="Debit">Payment</option>
                        <option value="Debit">Debit</option>
                        <option value="Kredit">Kredit</option>
                    </select><br />
                    <label>Note</label><br/>
                    <input type="text" placeholder="customer Note" onChange={e => setNote(e.target.value)} /><br/>
                    <div>
                        <input type="submit" value="Pay" />
                    </div>
                </form>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )

}
export default Payment