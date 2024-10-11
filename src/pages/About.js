import React from 'react';
import { Link } from 'react-router-dom';

import pic from '../images/website photo.jpg';
import logo from '../images/logo-3.png';

const About = () => {
  return (
    <div class="collect">
      <nav>
        <Link to="/">
          <img src={logo} class="ulti" alt="logo" />
        </Link>
      </nav>
      <img src={pic} class="thee" alt="pic" />
      <div class="sdl-text">
        <h1>ABOUT</h1>
        <br />
        <p>
          Temidayo 'SDL' Arise is a multifaceted visual artist born and raised
          in the city of Ilorin, Nigeria. He is known for his captivating
          artworks with thought-provoking concepts and a diverse range of
          themes, each artwork telling a unique story. With his keen eye for
          detail and his passion for creative expression, SDL's work captures
          human emotions fused with the mysteries of life's existence. His
          portfolio reflects his evolution as an artist, showcasing his
          dedication to his craft and the raw energy he puts into the art of
          SDL.
          <br />
          <br />
          <p>Exhibitions</p>
          <p>
            <b>The Artist Experience by The Process Africa</b> Lagos, Nigeria.
            December 2023
          </p>
          <p>
            <b>The Artist Commune</b> Lagos, Nigeria. May 2023
          </p>
          <p>
            <b>Galeria Lisboa by AW, Convento Do Beato</b> Lisbon, Portugal.
            October 2022
          </p>
          <p>
            <b>Lagos Gallery by AW</b> Lagos, Nigeria. December 2021
          </p>
          <p>
            <b>The Miami ART Basel</b> Miami, USA. November 2021
          </p>
          <h5>
            CONTACT ; <br />
            <br />
            <a href="mailto:sdlcommute@gmail.com">
              EMAIL : sdlcommute@gmail.com
            </a>
          </h5>
        </p>
      </div>
    </div>
  );
};

export default About;
