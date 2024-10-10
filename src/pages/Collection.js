import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import './collection.css';
import logo from '../images/logo-3.png';

import image1 from '../images/Abaddon.jpg';
import image2 from '../images/Amber.jpg';
import image3 from '../images/AURORA.jpg';
import image4 from '../images/Blindspot.jpg';
import image5 from '../images/Chrysalis II.jpg';
import image6 from '../images/Chrysalis X.jpg';
import image7 from '../images/Chrysanthemum.jpg';
import image8 from '../images/climax369.jpg';
import image9 from '../images/EDVARD MUNCH.jpg';
import image10 from '../images/Ex Animo.jpg';
import image11 from '../images/Ffallen Fantasy.jpg';
import image12 from '../images/Gemini.jpg';
import image13 from '../images/Hangman.jpg';
import image14 from '../images/HOPE.jpg';
import image15 from '../images/HUNDR3D.jpg';
import image16 from '../images/III.jpg';
import image17 from '../images/In This Light,.jpg';
import image18 from '../images/John Was A Farmer.jpg';
import image19 from '../images/Lake Atramento.jpg';
import image20 from '../images/Liber - Fade.jpg';
import image21 from '../images/Liber - Pierce.jpg';
import image22 from '../images/Liber - Reach.jpg';
import image23 from '../images/Lucy Lullaby.jpg';
import image24 from '../images/Lucy Redemption.jpg';
import image25 from '../images/Metamorphosis.jpg';
import image26 from '../images/Midnight Moon.jpg';
import image27 from '../images/MOONCHILD.jpg';
import image28 from '../images/nostalgia-time.jpg';
import image29 from '../images/PLASTIC.jpg';
import image30 from '../images/Putrescence.jpg';
import image31 from '../images/ROOTS.jpg';
import image32 from '../images/Unrequited Love (With Generis).jpg';
import image33 from '../images/Untitled I.jpg';
import image34 from '../images/Vanya Vitriol.jpg';
import image35 from '../images/Vas Inane.jpg';
import image36 from '../images/Vignette.jpg';
import image37 from '../images/Why Are You Green.jpg';
import image38 from '../images/Unrequited Love II (With Generis).jpg';

import image39 from '../images/indigo 0.jpg';
import image40 from '../images/indigo i.jpg';
import image41 from '../images/indigo ii.jpg';
import image42 from '../images/indigo iii.jpg';

import image43 from '../images/numinous transits RE.jpg';
import image44 from '../images/000 on this numinous transit r.jpg';
import image45 from '../images/1 Fallen Sacrifices.jpg';
import image46 from '../images/2 CITADEL.jpg';
import image47 from '../images/3 SEVER I.jpg';
import image48 from '../images/4 SEVER II.jpg';
import image49 from '../images/5 Our Father.jpg';
import image50 from '../images/6 Product Of My Environment.jpg';
import image51 from '../images/7 LOVE.jpg';
import image52 from '../images/8 Confessions.jpg';
import image53 from '../images/9 i am here for us.jpg';
import image54 from '../images/10 Parasite.jpg';
import image55 from '../images/11 Honest Giant 2.png';
import image56 from '../images/12 Mother.jpg';
import image57 from '../images/13 Mustapha_s Theory.jpg';
import image58 from '../images/14 Parable Of The Saint.jpg';
import image59 from '../images/14 Saint  storyline.jpg';
import image60 from '../images/15 The Final Sacrifice, Nobis.jpg';
import image61 from '../images/16 in the end of this numinous transit r.jpg';

import image62 from '../images/Anima Vestra.jpg';
import image63 from '../images/CHRYSALIS IV.jpg';
import image64 from '../images/Don_t Hurt The Bird.png';
import image65 from '../images/ETORHE.jpg';
import image66 from '../images/forever i am never here.jpg';
import image67 from '../images/John Is Not A Killer.jpg';
import image68 from '../images/Kill Sina.jpg';
import image69 from '../images/L enfance Nue.jpg';
import image70 from '../images/Malignant.jpg';
import image71 from '../images/Midnight Eye (with Britney Walker).jpg';
import image72 from '../images/Portrait Of A Lady On Fire.jpg';
import image73 from '../images/Some Things Are not Meant To Be.jpg';
import image74 from '../images/SPIRITS777.jpg';
import image75 from '../images/The Hermit Dilemma.jpg';
import image76 from '../images/The Powers That Be.jpg';
import image77 from '../images/Time To Save The World.jpg';

import image78 from '../images/Heaven Tears Are Not Rain.jpg';
import image79 from '../images/Wish You Were Here.jpg';

import image80 from '../images/Vega I, texts.jpg';
import image81 from '../images/Vega I.jpg';
import image82 from '../images/Vega II, texts.jpg';
import image83 from '../images/Vega II.jpg';
import image84 from '../images/Vega III, texts.jpg';
import image85 from '../images/VEGA III 2.jpg';
import image86 from '../images/Vega IV, texts.jpg';
import image87 from '../images/Vega IV.jpg';
import image88 from '../images/1 hold on, be strong al habib.jpg';
import image89 from '../images/2 ANT AL HABIB.jpg';
import image90 from '../images/3 APOLLO AL HABIB.jpg';
import image91 from '../images/4 we all bleed flowers al habib.jpg';

import image92 from "../images/1. deni's eye - final.jpg";
import image93 from '../images/2.eventually - final.jpg';
import image94 from "../images/3.kelechi's rage - final.jpg";
import image95 from '../images/4.innocencexignorance - final.jpg';
import image96 from '../images/5.indigo broke my heart - final.jpg';
import image97 from '../images/6.behind this image is god - final.jpg';
import image98 from '../images/7.deathwish but i could never wish for death - final.jpg';
import image99 from '../images/8. equilibrium HQ.jpg';
import image100 from '../images/9. free- final.jpg';
import image101 from '../images/10.would you still stay 2023.jpg';

import image102 from '../images/we may only fly.jpg';
import image103 from '../images/we may also fly note.jpg';
import image104 from '../images/of a greater reason.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  const isMobile = window.innerWidth <= 1000;

  const translateYValue = isMobile ? '-5rem' : '0';
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        transform: `translateY(${translateYValue})`,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  const isMobile = window.innerWidth <= 1000;

  const translateYValue = isMobile ? '-5rem' : '0';

  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        transform: `translateY(${translateYValue})`,
      }}
      onClick={onClick}
    />
  );
}
// Testing commit 2
const Collection = () => {
  const isMobile = window.innerWidth <= 767;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [showModal, setShowModal] = useState(false);

  const [imageSelected, setImageSelected] = useState(null);

  const openModal = (imageURL) => {
    setImageSelected(imageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setImageSelected(null);
  };

  return (
    <div
      class="div"
      style={{
        overflow: 'hidden',
      }}
    >
      <nav>
        <Link style={{ zIndex: '5' }} to="/">
          <img src={logo} class="ulti" alt="logo" />
        </Link>
      </nav>
      <div
        class="main-container"
        style={{
          transform: `translateX(${isMobile ? '1rem' : '0rem'})`,
        }}
      >
        <h2>2021 </h2>
        <Slider {...settings}>
          <div class="image-container">
            <img src={image1} alt="image1" class="opid" />
          </div>
          <div class="image-container">
            <img src={image2} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image3} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image4} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image5} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image6} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image7} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image8} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image9} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image10} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image11} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image12} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image13} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image14} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image15} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image16} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image17} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image18} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image19} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image20} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image21} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image22} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image23} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image24} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image25} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image26} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image27} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image28} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image29} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image30} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image31} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image32} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image33} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image34} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image35} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image36} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image37} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image38} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? '1rem' : '0rem'})`,
        }}
      >
        <h2>INDIGO [March 2022] </h2>
        <Slider {...settings}>
          <div class="image-container">
            <img src={image39} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image40} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image41} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image42} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? '1rem' : '0rem'})`,
        }}
      >
        <h2>Numinous Transits [May 2022 - Sept. 2022]</h2>
        <Slider {...settings}>
          <div class="image-container">
            <img src={image43} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image44} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image45} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image46} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image47} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image48} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image49} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image50} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image51} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image52} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image53} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image54} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image55} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image56} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image57} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image58} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image59} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image60} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image61} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? '1rem' : '0rem'})`,
        }}
      >
        <h2>2022 </h2>
        <Slider {...settings}>
          <div class="image-container">
            <img src={image62} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image63} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image64} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image65} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image66} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image67} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image68} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image69} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image70} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image71} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image72} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image73} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image74} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image75} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image76} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image77} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? '1rem' : '0rem'})`,
        }}
      >
        <h2>2023 </h2>
        <Slider {...settings}>
          <div class="image-container">
            <img src={image78} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image79} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image102} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image103} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? '1rem' : '0rem'})`,
        }}
      >
        <h2>VEGA [Mar. 2023 - Apr. 2023] </h2>
        <Slider {...settings}>
          <div class="image-container">
            <img src={image80} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image81} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image82} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image83} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image84} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image85} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image86} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image87} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? '1rem' : '0rem'})`,
        }}
      >
        <h2>Would You Still Stay [2023] </h2>
        <Slider {...settings}>
          <div class="image-container">
            <img src={image92} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image93} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image94} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image95} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image96} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image97} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image98} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image99} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image100} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image101} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? '1rem' : '0rem'})`,
        }}
      >
        <h2>AL-HABIB 2023 </h2>
        <Slider {...settings}>
          <div class="image-container">
            <img src={image88} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image89} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image90} alt="image1" class="opid2" />
          </div>
          <div class="image-container">
            <img src={image91} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? '1rem' : '0rem'})`,
        }}
      >
        <h2>2024 </h2>
        <Slider {...settings}>
          <div class="image-container">
            <img src={image104} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {imageSelected && <img src={imageSelected} alt="Preview" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
