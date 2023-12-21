import Sidebar from "../../Components/Sidebarmitra"



function Profilmitra(){
    return (
        <>
        <div className="containers">
        <Sidebar />
        <section className="konten">
        <div className="akun">
          <p>Fatimah Cafe</p>
        </div>
        <div className="mainconten">
        <div className="maincontentleft">
            <img src="../HALUTAMA/Img/cafe/1.png" alt="" />
            <h1>Meine Welt Cafe</h1>
            <p>
              Jl. Dhoho Kec. Lorem Kab. Ipsum <br />
              Alaskacafe@gmail.com <br />
              Jl. Dhoho Kec. Lorem Kab. Ipsum
            </p>
            <button><a href="login_mitra.html">LOGOUT</a></button>
          </div>
          <div className="maincontentright">
            <h1>Edit Profile</h1>
            <form>
              <label >Name Cafe</label> <br/>
              <input type="text" /> <br/>
              <label>Address</label> <br/>
              <input type="text" /> <br />
              <label>Email</label> <br/>
              <input type="text"/> <br/>
              <label>Phone Number</label> <br/>
              <input type="text"/> <br />
              <input type="submit" />
            </form>
          </div>

        </div>
        </section>
        </div>

        </>
    )
}

export default Profilmitra