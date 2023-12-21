import './admin.css'
import Sidebar from '../../Components/Sidebarmitra.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Addpro(){
    const [idpro, setIdpro] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [file, SetFile] = useState('');
    
    const navigate = useNavigate();
    function handleSubmit(event){
      event.preventDefault();
      const formdata = new FormData();
      formdata.append('idpro',idpro);
      formdata.append('name',name);
      formdata.append('price',price);
      formdata.append('category',category);
      formdata.append('image',file);
        
        axios.post('http://localhost:8081/addpro' , formdata)
        .then(res => {
          alert('Product saved successfully');
          navigate('/Product')
          
        }).catch(err => console.log(err));
    }
    return(
        <>
        <div className="containers">
        <Sidebar />
        <section className="konten">
        <div className="akun">
          <p>Meine Welt Cafe</p>
        </div>
        <div className="mainconten">
          <h1>
            <Link to={'/Product'}>Product</Link>
            
            / Add Product
          </h1>

          <div className="form">
            <form  onSubmit={handleSubmit}>
              <label>Id</label><br />
              <input type="text" placeholder='Input Product id' onChange={e => setIdpro(e.target.value)} /><br />
              <label>Name:</label><br />
              <input type="text"  placeholder='Input Product name' onChange={e => setName(e.target.value)} /><br />
              <label>Price:</label><br />
              <input type="number"  onChange={e => setPrice(e.target.value)} /><br />
              <label>Select Category:</label><br />
              <select onChange={e => setCategory(e.target.value)}>
                <option>Choose Category</option>
                <option>Food</option>
                <option>Baverages</option>
                <option>Snack</option>
                <option>Cocktail</option>
                <option>Coffee</option>
                <option>Non Coffee</option></select><br />
              <label>File Product:</label><br />
              <input type="file" onChange={e => SetFile(e.target.files[0])} />
             
              <br />
              <input type="Submit" />
            </form>
          </div>
        </div>
      </section>
      </div>
        </>
    )
}
export default Addpro