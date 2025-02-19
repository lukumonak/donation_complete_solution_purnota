import Navbr from '../Components/Navbr';
import logo from '../assets/dp-0.jpg'
import img1 from '../assets/images2.jpg'
import img3 from '../assets/images3.jpg'
import img5 from '../assets/images5.jpg'
import img6 from '../assets/images6.jpg'
import img7 from '../assets/images7.jpg'
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
        <p style={{ margin: '40px' }}>Lorem ipsum dolor sit amet consectetur quasi vel saepe? Quasi et corporis modi, ratione accusamus impedit, blanditiis Lorem ipsum dolor, sit amet consectetur adipisicing.hic dolor eum veritatis asperiores? adipisicing elit. Qui veniam quidem quisquam illum et nam facere delectus excepturi doloremque. Facere incidunt qui nesciunt corporis, sit tempore eum architecto fugit maxime perspiciatis deleniti dolore cumque culpa, dolor ad sint modi rem expedita iste odiautem?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati velit nobis deleniti nesciunt in voluptatum at, perferendint quibusdam quas asperiores voluptates tempora reiciendis possimus quae ad inciduntquasi vel saepe? Quasi et corporis modi, ratione accusamus impedit,anditiis hic dolor eum veritatis asperiores?</p>
      </div>


      <div className='heading_about1'>
        <h1 style={{ margin: '20px', backgroundColor: '#349782', color: 'white' }}>How Purnota works ?</h1>
      </div>

      <div className="work">

        <div className='works'>
          <img className="works_img" src={works3} alt="" />
          <div className="works_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugiat eos. Vitae totam tempora nihil quia esse! Animi dicta aspernatur ipsum illum nisi et fugit! Porro odio dicta eligendi possimus quae ipsa? Voluptas! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nesciunt excepturi odit quisquam sequi distinctio, explicabo, adipisci delectus corporis, sapiente ipsam consequatur aliquid non! Quam perferendis omnis tempora assumenda ipsam provident. Eligendi, repudiandae?</p>
          </div>
        </div>
        <div className='works'>
          <div className="works_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugiat eos. Vitae totam tempora nihil quia esse! Animi dicta aspernatur ipsum illumillum nisi et fugit! Porro odio dicta eligendi possimus quae ipsa? Voluptas! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
              nesciunt excepturi odit quisquam sequi distinctio, explicabo, adipisci delectus corporis, sapiente ipsam consequatur aliquid non! Quam perferendis nisi et fugit! Porro odio dicta eligendi possimus quae ipsa? Voluptas!</p>
          </div>
          <img className="works_img" src={works4} alt="" />
        </div>
        <div className='works'>
          <img className="works_img" src={works2} alt="" />
          <div className="works_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugiat eos. Vitae totam tempora nihil quia esse! Animi dicta aspernatur ipsum illumillum nisi et fugit! Porro odio dicta eligendi possimus quae ipsa? Voluptas! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
              nesciunt excepturi odit quisquam sequi distinctio, explicabo, adipisci delectus corporis, sapiente ipsam consequatur aliquid non! Quam perferendis
              nisi et fugit! Porro odio dicta eligendi possimus quae ipsa? Voluptas!</p>
          </div>
        </div>
        <div className='works'>
          <div className="works_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugiat eos. Vitae totam tempora nihil quia esse! Animi dicta aspernatur ipsum illumillum nisi et fugit! Porro odio dicta eligendi possimus quae ipsa? Voluptas! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
              nesciunt excepturi odit quisquam sequi distinctio, explicabo, adipisci delectus corporis, sapiente ipsam consequatur aliquid non! Quam perferendis
              nisi et fugit! Porro odio dicta eligendi possimus quae ipsa? Voluptas!</p>
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
            <Card.Img style={{ height: '15rem' }} variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="lw-1">
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '15rem' }} variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="lw-1">
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '15rem' }} variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="lw-1">
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '15rem' }} variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
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