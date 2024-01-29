import React from 'react';
import { Link } from "react-router-dom";


import pic from '../images/website photo.jpg';
import logo from '../images/logo-3.png';


const About = () => {
  return (
    <div class="collect">
             <nav>
            <Link to='/'>
              <img  src={logo}  class="ulti"  alt="logo"/>
            </Link>
             </nav>
             <img src={pic} class="thee"  alt="pic"/>
               <div class="sdl-text">
              <h1>ABOUT</h1>
              <br/>
              <p>
              Temidayo 'SDL' Arise is a dynamic visual artist currently based in the city of Ilorin, Nigeria. 
              He's known for his captivating artworks with thought-provoking concepts and a diverse range of themes, 
              each piece telling a unique story. With his keen eye for detail and his passion for creative expression, 
              SDL's work captures human emotions fused with the mysteries of existence. 
              His portfolio reflects his evolution as an artist, 
              showcasing his dedication to his craft and the raw energy he puts into each piece. 
              <br/><br/>
              <p>His work has been featured at The Miami ART Basel by AW, Miami, USA, back in November of 2021,</p>
              <p> NFT Lagos Gallery by AW, Lagos, Nigeria in December 2021</p>
              <p>NFT Galeria Lisboa at the Convento Do Beato, Lisbon, Portugal in October 2022</p>
              <p>NFT NYC in Manhattan, New York in April 2023</p>
              <p>The Artist Commune in Lagos, Nigeria in May 2023 </p>
              <p>And more recently The Artist Experience by The Process Africa in Lagos, Nigeria, December 2023.</p> 

                <h5>CONTACT ; <br/>
                <br/>
                <a href='mailto:sdlcommute@gmail.com'>EMAIL : sdlcommute@gmail.com</a>
               </h5>
               </p>
               </div>
             
          </div>
  
  )
}

export default About;

