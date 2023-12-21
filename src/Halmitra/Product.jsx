import './admin.css'
import Sidebar from '../../Components/Sidebarmitra.jsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios'


function Product(){
  const [product,setProduct] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res => setProduct(res.data))
    .catch(err => console.log(err));
  },[])


  const handleDelete = async (id_pro) => {
    try{
      await axios.delete('http://localhost:8081/product/'+id_pro)
      window.location.reload()
    }catch(err) {
      console.log(err);
    }

  }
    return(
        <>
        <div className="containers">
           <Sidebar />
        <section className="konten">
        <div className="akun">
          <p>Meine Welt Cafe</p>
          <img src="" alt="" />
        </div>
        <div className="mainconten">
          <div>
            <div>
              <h1>Product</h1>
            </div>
            <div className='btn'>
              <Link to={'Addproduct'} style={{textDecoration: 'none',color:'white'}}>+Add Product</Link>
            </div>
          </div>

          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>File Product</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {product.map((data ,i) =>(
                
               <tr key={i}>
                <td>{data.id_pro}</td>
                <td>{data.name}</td>
                <td>Rp. {data.price}</td>                
                <td>{data.category}</td>
                <td>{data.filepro}</td>
                <td>
                  <button className='btn_edit'><Link to={`update/${data.id_pro}`}>UPDATE</Link></button>
                  <button className='btn_hapus' onClick={ e => handleDelete(data.id_pro)}>DELETE</button>
                </td>
               </tr> 
              ))}
            </tbody>
            
            
          </table>
        </div>
      </section>

        </div>
        </>
    )
}
export default Product