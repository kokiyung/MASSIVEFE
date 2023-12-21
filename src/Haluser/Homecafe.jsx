import './homestyle.css'
import Card from '../../Components/Card.jsx'
import Navbar from '../../Components/Navbar.jsx'
import Footer from '../../Components/Footer.jsx'

function Homecafe() {
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
                <div className="firsttext">Choose Your</div>
                <div className="secondtext">Cafe</div>
            </div>
            <div className="lefttwo">
                <div className="firsttext">You'd like to</div>
                <div className="secondtext">go to</div>
            </div>
            <p>Order food from your favorite cafe near you</p>
            <div className="buttonfirstcontent">
                <a href="#cafe">ORDER NOW</a>
            </div>
        </div>
    </div>
    <section className="cafe" id="cafe">
        Recomended cafe with high rating
        <h1>Cafe Recomended</h1>
        <div className="cafelist">
            <Card />
            <Card />
            <Card />

        </div>
    </section>
    {/* Menu */}
    <section className="menusection">
        The most commonly enjoyed dishes across various cafe’s
        <h1>Most Popular Food</h1>
        <div className="cafelist">
            <Card />
            <Card />
            <Card />
        </div>
    </section>
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
export default Homecafe