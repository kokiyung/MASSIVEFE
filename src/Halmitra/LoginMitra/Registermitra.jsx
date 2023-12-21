import './stylelogin.css'
import { Link, Navigate } from 'react-router-dom'
import React, {useState} from 'react'
import Validation from'./registercek'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Registermitra(){
   const [values, setValues] = useState({
    username: '',
    name:'',
    cafename:'',
    phone:'',
    email:'',
    password: ''
   })
   const Navigate = useNavigate()
   const[errors, setErrors] = useState({})
   const handleInput=(event) =>{
    setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
   }
   const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.username === '' && errors.name === '' && errors.cafename === '' && errors.phone === '' && errors.email === '' && errors.password ===''){
        axios.post('http://localhost:8081/registermitra', values)
        .then(res => {
            alert('register sesessfully');
            Navigate('/Loginmitra')
        })
        .catch(err => console.log(err))
        

    }else{alert('data shoult no be empaty')}
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
                <h1>REGISTER MITRA</h1>
                <div className="inputform">
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" name='username' onChange={handleInput} /> <br />
                {errors.username && <span>{errors.username}</span>} <br />
                <input type="text" placeholder="name" name='name' onChange={handleInput} /> <br />
                {errors.username && <span>{errors.name}</span>} <br />
                <input type="text" placeholder="Cafe name" name='cafename' onChange={handleInput} /> <br />
                {errors.username && <span>{errors.cafename}</span>} <br />
                <input type="number" placeholder="phone" name='phone' onChange={handleInput} /> <br />
                {errors.username && <span>{errors.phone}</span>} <br />
                <input type="email" placeholder="Email" name='email' onChange={handleInput} /> <br />
                {errors.username && <span>{errors.email}</span>} <br />
                <input type="password" placeholder="Password" name='password' onChange={handleInput} /><br />
                {errors.password && <span>{errors.password}</span>}
                <div className="loginbutton">
                <button><Link to='../Loginmitra'>already have an account</Link></button>
                <button type='submit' style={{fontSize : '20px'}}>register</button>
                
                </div>
                </form>
                
        </div>
      </div>
    </div>
    )
}
export default Registermitra;