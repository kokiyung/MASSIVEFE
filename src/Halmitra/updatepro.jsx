import './admin.css'
import Sidebar from '../../Components/Sidebarmitra.jsx'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Updatepro(){
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const {id_pro} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id_pro , {name, price, category})
        .then(res => {
          console.log(res);
          navigate('/Product');
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
            
            / Update Product
          </h1>

          <div className="form">
            <form  onSubmit={handleSubmit}>
              <label>Name:</label><br />
              <input type="text"  placeholder='Input Product name' onChange={e => setName(e.target.value)} /><br />
              <label>Price:</label><br />
              <input type="number"  onChange={e => setPrice(e.target.value)} /><br />
              <label>Select Category:</label><br />
              <select onChange={e => setCategory(e.target.value)}>
                <option>Chategory</option>
                <option>Food</option>
                <option>Baverages</option>
                <option>Snack</option>
                <option>Cocktail</option>
                <option>Coffee</option>
                <option>Non Coffee</option></select><br />
              <br />
             <input type="submit" value={'Update'} />
            </form>
          </div>
        </div>
      </section>
      </div>
        </>
    )
}
export default Updatepro