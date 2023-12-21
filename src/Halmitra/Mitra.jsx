import './admin.css'
import Sidebar from '../../Components/Sidebarmitra.jsx'
import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'


function Mitra(){
  const [transaksi,setTransaksi] = useState([])
  const Navigate = useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:8081/transaksi')
    .then(res => setTransaksi(res.data))
    .catch(err => console.log(err));
  },[])

  const handleAccept = (id_transaksi) => {
    axios.put(`http://localhost:8081/accept/${id_transaksi}`)
      .then(res => {
        
        console.log(res.data);
        Navigate('/Mitra');
      })
      .catch(err => console.log(err));
  };

  const handleReject = (id_transaksi) => {
    axios.put(`http://localhost:8081/reject/${id_transaksi}`)
      .then(res => {
        
        console.log(res.data);
        Navigate('/Mitra');

      })
      .catch(err => console.log(err));
  };

    return(
        <>
        <div className="containers">
           <Sidebar />
           <section className="konten">
        <div className="akun">
          <p>Fatimah Cafe</p>
        </div>
        <div className="mainconten">
          <h1>Order History</h1>
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Note</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {transaksi.map((data,i) =>(
              <tr key={i}>
              <td>{data.id_transaksi}</td>
              <td>{data.id_pro}</td>
              <td>{data.price}</td>
              <td>{data.name}</td>
              <td>{data.date}</td>
              <td>{data.time}</td>
              <td>{data.pay}</td>
              <td>{data.status}</td>
              <td>{data.note}</td>
              <td>
              <button className='btn_edit' onClick={() => handleAccept(data.id_transaksi)}>
                <Link to={`accept/${data.id_transaksi}`}>Accept</Link>
              </button>
              <button className='btn_hapus' onClick={() => handleReject(data.id_transaksi)}>
                Reject
              </button>
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
export default Mitra