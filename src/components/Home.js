import React from 'react';
import bgimg from '../videos/bgvideo1.mp4'
import { AiFillInstagram,  AiFillMail, AiFillFacebook ,AiFillLinkedin, AiFillYoutube} from "react-icons/ai";

const Home = () => {
  return <>
  <div className="App">
  <video autoPlay loop muted style={{position: "absolute",

width: "100%",

alignItems: 'stretch',

left: "50%",

top: "50%",

height: "100%",

objectFit: "cover",

transform: "translate(-50%, -50%)",

zIndex: "-1"}}>
        <source
          src={bgimg}
          type="video/mp4"
        />
     
      </video>
{/* <div class="background"> */}

  <section class="hero">
  
    <div class="jumbotron jumbotron-fluid mb-5">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-10 col-lg-6 " >
          <br />
          <br />
          <br /><br />
            <h1 class="brand-heading ">ENIGMA</h1>
<br />
          <p class="lead">
              <a class="btn btn-danger btn-lg" href="/login" role="button">LOGIN</a>
            </p>
         
            
          </div>
        </div>
        
      </div>
    </div>
  </section>

  <section id="sec-about" class="sec-about pb-5 pt-0">
    <div class="container4">
      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-8">
          <h1 class="h4">IEEE-SB MMMUT, GORAKHPUR</h1>
        
        </div>
      </div>

     
    </div>
  </section>
  </div>
{/* // </div> */}

    
  </>;
};

export default Home;
