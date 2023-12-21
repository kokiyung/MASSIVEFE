import './homestyle.css'
import image from './Img/friendrice.png'
import Card from '../../Components/Card'
import Navbar from '../../Components/Navbar.jsx'
import Footer from '../../Components/Footer.jsx'

function Homeuser() {
    const Pesancolor1 = {
        color : '#603813'
    }
    const Pesancolor2 = {
        color : '#FCB040'
    }

    return (
        <>
        <Navbar />
        {/* Section top */}
        <div className="firstcontent" id="home">
        <div className="leftcontent">
            <div className="leftone">
                <div className="firsttext">Enjoy</div>
                <div className="secondtext">Your Food</div>
            </div>
            <div className="lefttwo">
                <div className="firsttext">without having</div>
                <div className="secondtext">to</div>
            </div>
            <div className="leftthree">
                <div className="firsttext"></div>
                <div className="secondtext">queue</div>
            </div>
            <p>Order food from your favorite cafe near you</p>
            <div className="buttonfirstcontent">
                <a href="#cafe">ORDER NOW</a>
            </div>
        </div>
        <div className="rightcontent"><img src={image} alt="" /></div>
    </div>
    {/* Section abaout */}
    <section className="secondsection" id="about">
        <div className="leftlogo"> <p style={Pesancolor1}>Pesen</p><p style={Pesancolor2}>In</p></div>
        <div className="rightsecondsection">
             <p>PesenIn is an online platform that helps customers easily and efficiently order food. It offers a practical solution for food ordering through its website, allowing users to place orders from different restaurants without the need to wait in cafes.</p>
             <div className="seccek">
                <div><i className="fa fa-check-circle"></i> Practical</div>
                <div><i className="fa fa-check-circle"></i> Discount</div>
                <div><i className="fa fa-check-circle"></i> Trusted</div>
                <div><i className="fa fa-check-circle"></i> Efficient</div>
             </div>
             
             <div className="buttonsection">
                <a href="">Read More</a>
            </div>
            </div>
    </section>
    {/* Cafe */}
    {/* Bootom section */}
    <section className="bottomsec">
        <div className="logo"><p style={Pesancolor1}>Pesen</p><p style={Pesancolor2}>In</p></div>
        <p>Our task is to create a food ordering website without having to queue.</p>
        <div className="sosmed">
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
        </div>
    </section>
    {/* Footer */}
    <Footer />
    
    </>
    )
}
export default Homeuser