
import Homepage from "../../components/home/Homepage"
import Jobdetail from "../../components/jobdetail/Jobdetail"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import MyFlter from '../../components/Test/MyFlter'
const Homes = () => {
  return (
    <div>
      <Homepage />
      <MyFlter />
      <Jobdetail />
      <Contact />
      <Footer />

      <div className="copyrights" style={{ marginTop: "12px", textAlign: "center" }}>
        <span >&copy; <strong>2023 JobBoard.com </strong> All rights reserved.</span>
      </div>


    </div>
  )
}


export default Homes
