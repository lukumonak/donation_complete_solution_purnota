import Navbr from '../Components/Navbr';
import logo from '../assets/dp-0.jpg'
import img1 from '../assets/images2.jpg'
import img3 from '../assets/images3.jpg'
import img5 from '../assets/images5.jpg'
import img6 from '../assets/images6.jpg'
import img7 from '../assets/images7.jpg'
import img8 from '../assets/passport.jpg'
import works1 from '../assets/1.png'
import works2 from '../assets/2.png'
import works3 from '../assets/3.png'
import works4 from '../assets/4.png'
import '../Components/cssfiles/aboutus.css'
import Footer from '../Components/Footer';
import Card from 'react-bootstrap/Card';


function AboutUs() {

  let images = [
    {
      id: 1,
      imgshow: logo
    },
    {
      id: 2,
      imgshow: img6
    },
    {
      id: 3,
      imgshow: img7
    },
    {
      id: 4,
      imgshow: img3
    },
    {
      id: 5,
      imgshow: img7
    },
    {
      id: 6,
      imgshow: img5
    },
    {
      id: 7,
      imgshow: img1
    },
    {
      id: 8,
      imgshow: logo
    },
    {
      id: 9,
      imgshow: img6
    },
    {
      id: 10,
      imgshow: img8
    },
    
  ]




  return (

    <div className='App'>
      <Navbr />

      <div className='dt-1'>
        <img className='img_blur' src={logo} alt={'img load'} />
        <div className="dt-2">&lt; About us &gt;</div>
      </div>

      <div className="container">
        <div className="heading_about1">Our History</div>
        <p style={{ margin: '40px' }}>
        Purnota is a centralized platform that connects donors, registered organizations, and people in need. It simplifies the donation process, making it easier for users to contribute. Donors can list items such as clothes, books, or household essentials. Registered organizations view these listings, arrange pickups, and deliver the donated items to beneficiaries. Purnota monitors the entire process to ensure smooth operations. Notifications are sent to donors and organizations during key stages, ensuring transparency and accountability throughout the process. Founded in 20##, Purnota started as a small initiative to connect donors with trusted organizations. It quickly grew, expanding its reach and ensuring donations effectively reached those in need.
          </p>
      </div>


      <div className='heading_about1'>
        <h1 style={{ margin: '20px', backgroundColor: '#349782', color: 'white' }}>How Purnota works ?</h1>
      </div>

      <div className="work h4">

        <div className='works '>
          <img className="works_img" src={works3} alt="" />
          <div className="works_text">
            <p>
              
            Purnota is a centralized platform that connects donors, registered organizations, and people in need. It simplifies the donation process, making it easier for users to contribute.

            </p>
          </div>
        </div>
        <div className='works'>
          <div className="works_text">
            <p>
            Donors can list items such as clothes, books, or household essentials. Registered organizations view these listings, arrange pickups, and deliver the donated items to beneficiaries.
              
              </p>
          </div>
          <img className="works_img" src={works4} alt="" />
        </div>
        <div className='works'>
          <img className="works_img" src={works2} alt="" />
          <div className="works_text">
            <p>
            are sent to donors and organizations during key stages, ensuring transparency and accountability throughout the process. are sent to donors and organizations during key stages, ensuring transparency and accountability throughout the process.
              </p>
          </div>
        </div>
        <div className='works'>
          <div className="works_text">
            <p>
            By bridging the gap between donors and organizations, Purnota promotes charitable giving. It ensures donated resources are effectively managed and reach those who need them.              </p>
          </div>
          <img className="works_img" src={works1} alt="" />
        </div >
      </div>





      <div className="gallery-container">
        {
          images.map((item, index) => {
            return (
              <div className="pics" key={index}>
                <img src={item.imgshow} style={{ width: "100%" }} alt={item.id} />
              </div>
            )
          })
        }


      </div>

      <div className='heading_about1'>
        <h1 style={{ margin: '20px', backgroundColor: '#349782', color: 'white' }}>Our Team</h1>
      </div>

      <div className="lw-0">
        <div className="lw-1">
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '15rem' }} variant="top" src={img8} />
            <Card.Body>
              <Card.Title>Founder</Card.Title>
              <Card.Title>xyz</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="lw-1">
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '15rem' }} variant="top" src={img8} />
            <Card.Body>
              <Card.Title>Founder</Card.Title>
              <Card.Title>abc</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="lw-1">
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '15rem' }} variant="top" src={img8} />
            <Card.Body>
              <Card.Title>founder</Card.Title>
              <Card.Title>xyz</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="lw-1">
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '15rem' }} variant="top" src={img8} />
            <Card.Body>
              <Card.Title>Team Lead</Card.Title>
              <Card.Title>abc</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>


      <h1></h1>
      <Footer />
    </div>
  );
}
export default AboutUs;