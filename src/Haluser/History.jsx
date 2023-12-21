import Navbarin from "../../Components/Navbarin"
import './cartstyle.css'


function History(){
    return(
        <>
        <Navbarin />
        <div className="struk">
        <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>NAME</th>
                    <th>DATE</th>
                    <th>TIME</th>
                    <th>PAYMENT</th>
                    <th>STATUS</th>
                    <th>NOTE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Test789</td>
                    <td>Paket Hemat 53</td>
                    <td>Rp. 60000</td>
                    <td>Irul</td>
                    <td>20/12/2023</td>
                    <td>14.30 AM</td>
                    <td>DEBIT</td>
                    <td>WAITING</td>
                    <td>OUTDOOR</td>
                </tr>
                </tbody>
                </table> 
                </div>       
                </>
    )
}

export default History