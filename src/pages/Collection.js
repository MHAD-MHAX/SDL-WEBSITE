import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "./collection.css";
import logo from "../images/logo-3.png";

import image1 from "../images/Abaddon.jpg";
import image2 from "../images/Amber.jpg";
import image3 from "../images/AURORA.jpg";
import image4 from "../images/Blindspot.jpg";
import image5 from "../images/Chrysalis II.jpg";
import image6 from "../images/Chrysalis X.jpg";
import image7 from "../images/Chrysanthemum.jpg";
import image8 from "../images/climax369.jpg";
import image9 from "../images/EDVARD MUNCH.jpg";
import image10 from "../images/Ex Animo.jpg";
import image11 from "../images/Ffallen Fantasy.jpg";
import image12 from "../images/Gemini.jpg";
import image13 from "../images/Hangman.jpg";
import image14 from "../images/HOPE.jpg";
import image15 from "../images/HUNDR3D.jpg";
import image16 from "../images/III.jpg";
import image17 from "../images/In This Light,.jpg";
import image18 from "../images/John Was A Farmer.jpg";
import image19 from "../images/Lake Atramento.jpg";
import image20 from "../images/Liber - Fade.jpg";
import image21 from "../images/Liber - Pierce.jpg";
import image22 from "../images/Liber - Reach.jpg";
import image23 from "../images/Lucy Lullaby.jpg";
import image24 from "../images/Lucy Redemption.jpg";
import image25 from "../images/Metamorphosis.jpg";
import image26 from "../images/Midnight Moon.jpg";
import image27 from "../images/MOONCHILD.jpg";
import image28 from "../images/nostalgia-time.jpg";
import image29 from "../images/PLASTIC.jpg";
import image30 from "../images/Putrescence.jpg";
import image31 from "../images/ROOTS.jpg";
import image32 from "../images/Unrequited Love (With Generis).jpg";
import image33 from "../images/Untitled I.jpg";
import image34 from "../images/Vanya Vitriol.jpg";
import image35 from "../images/Vas Inane.jpg";
import image36 from "../images/Vignette.jpg";
import image37 from "../images/Why Are You Green.jpg";
import image38 from "../images/Unrequited Love II (With Generis).jpg";

import image39 from "../images/indigo 0.jpg";
import image40 from "../images/indigo i.jpg";
import image41 from "../images/indigo ii.jpg";
import image42 from "../images/indigo iii.jpg";

import image43 from "../images/numinous transits RE.jpg";
import image44 from "../images/000 on this numinous transit r.jpg";
import image45 from "../images/1 Fallen Sacrifices.jpg";
import image46 from "../images/2 CITADEL.jpg";
import image47 from "../images/3 SEVER I.jpg";
import image48 from "../images/4 SEVER II.jpg";
import image49 from "../images/5 Our Father.jpg";
import image50 from "../images/6 Product Of My Environment.jpg";
import image51 from "../images/7 LOVE.jpg";
import image52 from "../images/8 Confessions.jpg";
import image53 from "../images/9 i am here for us.jpg";
import image54 from "../images/10 Parasite.jpg";
import image55 from "../images/11 Honest Giant 2.png";
import image56 from "../images/12 Mother.jpg";
import image57 from "../images/13 Mustapha_s Theory.jpg";
import image58 from "../images/14 Parable Of The Saint.jpg";
import image59 from "../images/14 Saint  storyline.jpg";
import image60 from "../images/15 The Final Sacrifice, Nobis.jpg";
import image61 from "../images/16 in the end of this numinous transit r.jpg";

import image62 from "../images/Anima Vestra.jpg";
import image63 from "../images/CHRYSALIS IV.jpg";
import image64 from "../images/Don_t Hurt The Bird.png";
import image65 from "../images/ETORHE.jpg";
import image66 from "../images/forever i am never here.jpg";
import image67 from "../images/John Is Not A Killer.jpg";
import image68 from "../images/Kill Sina.jpg";
import image69 from "../images/L enfance Nue.jpg";
import image70 from "../images/Malignant.jpg";
import image71 from "../images/Midnight Eye (with Britney Walker).jpg";
import image72 from "../images/Portrait Of A Lady On Fire.jpg";
import image73 from "../images/Some Things Are not Meant To Be.jpg";
import image74 from "../images/SPIRITS777.jpg";
import image75 from "../images/The Hermit Dilemma.jpg";
import image76 from "../images/The Powers That Be.jpg";
import image77 from "../images/Time To Save The World.jpg";

import image78 from "../images/Heaven Tears Are Not Rain.jpg";
import image79 from "../images/Wish You Were Here.jpg";

import image80 from "../images/Vega I, texts.jpg";
import image81 from "../images/Vega I.jpg";
import image82 from "../images/Vega II, texts.jpg";
import image83 from "../images/Vega II.jpg";
import image84 from "../images/Vega III, texts.jpg";
import image85 from "../images/VEGA III 2.jpg";
import image86 from "../images/Vega IV, texts.jpg";
import image87 from "../images/Vega IV.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  const isMobile = window.innerWidth <= 1000;

  const translateYValue = isMobile ? "-5rem" : "0";
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        transform: `translateY(${translateYValue})`,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  const isMobile = window.innerWidth <= 1000;

  const translateYValue = isMobile ? "-5rem" : "0";

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
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
    slidesToScroll: 2,
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
        overflow: "hidden",
      }}
    >
      <nav>
        <Link to="/">
          <img src={logo} class="ulti" alt="logo" />
        </Link>
      </nav>
      <div
        class="main-container"
        style={{
          transform: `translateX(${isMobile ? "1rem" : "0rem"})`,
        }}
      >
        <h2>2021 </h2>
        <Slider {...settings}>
          <div class="image-container" onClick={() => openModal(image1)}>
            <img src={image1} alt="image1" class="opid" />
          </div>
          <div class="image-container" onClick={() => openModal(image2)}>
            <img src={image2} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image3)}>
            <img src={image3} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image4)}>
            <img src={image4} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image5)}>
            <img src={image5} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image6)}>
            <img src={image6} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image7)}>
            <img src={image7} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image8)}>
            <img src={image8} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image9)}>
            <img src={image9} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image10)}>
            <img src={image10} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image11)}>
            <img src={image11} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image12)}>
            <img src={image12} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image13)}>
            <img src={image13} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image14)}>
            <img src={image14} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image15)}>
            <img src={image15} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image16)}>
            <img src={image16} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image17)}>
            <img src={image17} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image18)}>
            <img src={image18} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image19)}>
            <img src={image19} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image20)}>
            <img src={image20} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image21)}>
            <img src={image21} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image22)}>
            <img src={image22} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image23)}>
            <img src={image23} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image24)}>
            <img src={image24} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image25)}>
            <img src={image25} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image26)}>
            <img src={image26} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image27)}>
            <img src={image27} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image28)}>
            <img src={image28} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image29)}>
            <img src={image29} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image30)}>
            <img src={image30} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image31)}>
            <img src={image31} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image32)}>
            <img src={image32} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image33)}>
            <img src={image33} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image34)}>
            <img src={image34} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image35)}>
            <img src={image35} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image36)}>
            <img src={image36} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image37)}>
            <img src={image37} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image38)}>
            <img src={image38} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? "1rem" : "0rem"})`,
        }}
      >
        <h2>INDIGO [March 2022] </h2>
        <Slider {...settings}>
          <div class="image-container" onClick={() => openModal(image39)}>
            <img src={image39} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image40)}>
            <img src={image40} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image41)}>
            <img src={image41} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image42)}>
            <img src={image42} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? "1rem" : "0rem"})`,
        }}
      >
        <h2>Numinous Transits [May 2022 - Sept. 2022]</h2>
        <Slider {...settings}>
          <div class="image-container" onClick={() => openModal(image43)}>
            <img src={image43} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image44)}>
            <img src={image44} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image45)}>
            <img src={image45} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image46)}>
            <img src={image46} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image47)}>
            <img src={image47} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image48)}>
            <img src={image48} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image49)}>
            <img src={image49} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image50)}>
            <img src={image50} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image51)}>
            <img src={image51} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image52)}>
            <img src={image52} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image53)}>
            <img src={image53} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image54)}>
            <img src={image54} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image55)}>
            <img src={image55} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image56)}>
            <img src={image56} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image57)}>
            <img src={image57} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image58)}>
            <img src={image58} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image59)}>
            <img src={image59} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image60)}>
            <img src={image60} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image61)}>
            <img src={image61} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? "1rem" : "0rem"})`,
        }}
      >
        <h2>2022 </h2>
        <Slider {...settings}>
          <div class="image-container" onClick={() => openModal(image62)}>
            <img src={image62} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image63)}>
            <img src={image63} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image64)}>
            <img src={image64} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image65)}>
            <img src={image65} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image66)}>
            <img src={image66} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image67)}>
            <img src={image67} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image68)}>
            <img src={image68} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image69)}>
            <img src={image69} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image70)}>
            <img src={image70} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image71)}>
            <img src={image71} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image72)}>
            <img src={image72} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image73)}>
            <img src={image73} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image74)}>
            <img src={image74} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image75)}>
            <img src={image75} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image76)}>
            <img src={image76} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image77)}>
            <img src={image77} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? "1rem" : "0rem"})`,
        }}
      >
        <h2>2023 </h2>
        <Slider {...settings}>
          <div class="image-container" onClick={() => openModal(image78)}>
            <img src={image78} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image79)}>
            <img src={image79} alt="image1" class="opid2" />
          </div>
        </Slider>
      </div>
      <div
        class="main-container2"
        style={{
          transform: `translateX(${isMobile ? "1rem" : "0rem"})`,
        }}
      >
        <h2>VEGA [Mar. 2023 - Apr. 2023] </h2>
        <Slider {...settings}>
          <div class="image-container" onClick={() => openModal(image80)}>
            <img src={image80} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image81)}>
            <img src={image81} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image82)}>
            <img src={image82} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image83)}>
            <img src={image83} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image84)}>
            <img src={image84} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image85)}>
            <img src={image85} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image86)}>
            <img src={image86} alt="image1" class="opid2" />
          </div>
          <div class="image-container" onClick={() => openModal(image87)}>
            <img src={image87} alt="image1" class="opid2" />
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