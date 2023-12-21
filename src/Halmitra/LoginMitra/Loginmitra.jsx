import './stylelogin.css'
import { Link, useNavigate } from 'react-router-dom'
import React, {useState} from 'react'
import Validation from'./Logincek'
import axios from 'axios'

function Loginmitra(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const Navigate = useNavigate();

    function handleSubmit(event){
      event.preventDefault();
      axios.post('http://localhost:8081/loginmitra' , {username , password})
      .then(res => {
        if(res.data === "Login successfull"){
          Navigate('/Mitra')
        }else{
          alert("incorrect username or password")
        }
      })
      .catch(err => console.log(err));
    }
  
    

    return(
        <div className="container">
            <div className="leftside">
                <div className="contentleft">
                    <div style={{color : '#603813'}}>Pesan</div>
                    <div style={{color : '#FCB040'}}>In</div>
                </div>
            </div>
            <div className="rightside">
                <h1>LOGIN MITRA</h1>
                <div className="inputform">
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} /> <br />
                <input type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)} /><br />
                <div className="loginbutton">
                <button type='submit' style={{fontSize : '20px'}}>Login</button>
                <button><Link to='../Registermitra'>Register</Link></button>
                </div>
                </form>
                
        </div>
      </div>
    </div>
    )
}
export default Loginmitra;