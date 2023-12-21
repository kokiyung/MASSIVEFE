import {Routes, Route}from 'react-router-dom'
import Homeuser from './Haluser/Haluser.jsx'
import Homecafe from './Haluser/Homecafe.jsx'
import Loginuser from './Haluser/Login/Loginuser.jsx'
import Registeruser from './Haluser/Login/Registeruser.jsx'
import { Nomatch } from '../Components/Nomach.jsx'
import Cafelist from './Haluser/Cafelist.jsx'
import Menulist from './Haluser/Menulist.jsx'
import Cart from './Haluser/Cart.jsx'
import Payment from './Haluser/Payment.jsx'
import Mitra from './Halmitra/Mitra.jsx'
import Product from './Halmitra/Product.jsx'
import Addpro from './Halmitra/addpro.jsx'
import Updatepro from './Halmitra/updatepro.jsx'
import Loginmitra from './Halmitra/LoginMitra/Loginmitra.jsx'
import Registermitra from './Halmitra/LoginMitra/Registermitra.jsx'
import Profilmitra from './Halmitra/profilemitra.jsx'
import Succes from './Haluser/Succses.jsx'
import History from './Haluser/History.jsx'






function App(){
  return(
    <Routes>
      <Route path='/' element={<Homeuser />}></Route>
      <Route path='Cafe' element={<Homecafe />}></Route>
      <Route path='Loginuser' element={<Loginuser />}></Route>
      <Route path='Registeruser' element={<Registeruser />}></Route>
      <Route path='*' element={<Nomatch />}></Route>
      <Route path='CafeList'element={<Cafelist />}></Route>
      <Route path='MenuList'element={<Menulist />}></Route>
      <Route path='MenuList/Cart/:id_pro' element={<Cart />}></Route>
      <Route path='Payment' element={<Payment />}></Route>
      <Route path='Mitra' element={<Mitra />}></Route>
      <Route path='Product' element={<Product />}></Route>
      <Route path='Product/Addproduct' element={<Addpro />}></Route>
      <Route path='Product/update/:id_pro' element={<Updatepro />}></Route>
      <Route path='Loginmitra' element={<Loginmitra />}></Route>
      <Route path='Registermitra' element={<Registermitra />}></Route>
      <Route path='profile' element={<Profilmitra />}></Route>
      <Route path='Succes' element={<Succes />}></Route>
      <Route path='History' element={<History />}></Route>
      
    </Routes>

  )
}

export default App;