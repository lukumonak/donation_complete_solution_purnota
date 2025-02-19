import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbr from '../Components/Navbr';
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider';
import '../Components/cssfiles/homepage.css'
import img1 from '../assets/img1.jpg'
import { useNavigate,Link } from 'react-router-dom';




function HomePage() {

  const navigate = useNavigate();

  const donatepage=()=>{
    navigate('/donate')
  }

  return (
    <div className='App'>
      <Navbr />
      <ImageSlider />

      <div class="custom-div inImag">
      "Turn Your Discards into<br/> Treasures: Creating a Donation Platform<br/> for Reusable Items"

        <div className='Donate_button_frontpage'>
        <Button style={{width:'105px'}} variant="outline-light" onClick={donatepage}>Donate Now</Button>{' '}

        </div>
      </div>

      <div class="custom-div">
        Your Discard may someone's <br />Treasure”: Building a Platform for Donations atem, pariatur dicta <br /> iusto laudantium repellat
      </div>

      <div className="secondBox">
        <div className="secondBox_img">
        <img className="works_img" src={img1} alt="" />
        </div>

        <div className="outer-div">
          <div className='outer-div1'>Let's make  <br />world Batter place to </div>
          <div className="inner-div2">
            <p>This is a paragraph with smaconsectetur adipisicing elit. Voluptatem, pariatur dicta iusto laudantium repellat molestias mt.</p>
          </div>
          <div className="inner-div3">
            <p>This is a paragraph with smaller font size Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, pariatur dicta iusto
              laudantium repellat molestias magni optio repudiandae molestiae enim at ut.</p>
          </div>
        </div>

      </div>












      <div className='donate_cz'>
        <div className="donate_q">why we <br />need to donate old things ?</div>
        <div className="donate_a">

          <div className="donate_cz1 item">
            <div className='cause-heading'>01<br />world Batter place to </div>
            <div className="cause-description">
              <p>This is a paragraph with smaconsectetur adipisicing elit. Voluptatem, pariatur dicta iusto laudantium repellat molestias mt.</p>
            </div>
          </div>

          <div className="donate_cz2 item ">
            <div className='cause-heading'>02<br />world Batter place to </div>
            <div className="cause-description">
              <p>This is a paragraph with smaconsectetur adipisicing elit. Voluptatem, pariatur dicta iusto laudantium repellat molestias mt.</p>
            </div>
          </div>

          <div className="donate_cz3 item">
            <div className='cause-heading'>03<br />world Batter place to </div>
            <div className="cause-description">
              <p>This is a paragraph with smaconsectetur adipisicing elit. Voluptatem, pariatur dicta iusto laudantium repellat molestias mt.</p>
            </div>
          </div>

          <div className="donate_cz4 item">
            <div className='cause-heading'>03<br />world Batter place to </div>
            <div className="cause-description">
              <p>This is a paragraph with smaconsectetur adipisicing elit. Voluptatem, pariatur dicta iusto laudantium repellat molestias mt.</p>
            </div>
          </div>

          <div className="donate_cz5 item">
            <div className='cause-heading'>03<br />world Batter place to </div>
            <div className="cause-description">
              <p>This is a paragraph with smaconsectetur adipisicing elit. Voluptatem, pariatur dicta iusto laudantium repellat molestias mt.</p>
            </div>
          </div>



          <div className="donate_cz6 item">
            <div className='cause-heading'>04<br />world Batter place to </div>
            <div className="cause-description">
              <p>This is a paragraph with smaconsectetur adipisicing elit. Voluptatem, pariatur dicta iusto laudantium repellat molestias mt.</p>
            </div>
          </div>
        </div>

      </div>






















      <h1></h1>
      <Footer />
    </div>
  );
}
export default HomePage;