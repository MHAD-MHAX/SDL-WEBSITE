import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import logo from '../images/logo.png';

import image1 from '../images/Abaddon.jpg';
import image2 from '../images/AURORA.jpg';
import image3 from '../images/Amber.jpg';
import image4 from '../images/Blindspot.jpg';
import image5 from '../images/Chrysalis II.jpg';
import image6 from '../images/Chrysalis X.jpg';
import image7 from '../images/Chrysanthemum.jpg';
import image8 from '../images/EDVARD MUNCH.jpg';
import image9 from '../images/Ex Animo.jpg';
import image10 from '../images/Ffallen Fantasy.jpg';
import image11 from '../images/Gemini.jpg';
import image12 from '../images/HOPE.jpg';
import image13 from '../images/HUNDR3D.jpg';
import image14 from '../images/Hangman.jpg';
import image15 from '../images/III.jpg';
import image16 from '../images/In This Light,.jpg';
import image17 from '../images/John Was A Farmer.jpg';
import image18 from '../images/Liber - Fade.jpg';
import image19 from '../images/Liber - Pierce.jpg';
import image20 from '../images/Liber - Reach.jpg';
import image21 from '../images/climax369.jpg';
import image22 from '../images/Lake Atramento.jpg';

import image23 from '../images/Lucy Lullaby.jpg';
import image24 from '../images/Lucy Redemption.jpg';
import image25 from '../images/MOONCHILD.jpg';
import image26 from '../images/Metamorphosis.jpg';
import image27 from '../images/Midnight Moon.jpg';
import image28 from '../images/PLASTIC.jpg';
import image29 from '../images/Putrescence.jpg';
import image30 from '../images/ROOTS.jpg';
import image31 from '../images/Unrequited Love (With Generis).jpg';
import image32 from '../images/Unrequited Love II (With Generis).jpg';
import image33 from '../images/Untitled I.jpg';
import image34 from '../images/Vanya  Vitriol.jpg';
import image35 from '../images/Vas Inane.jpg';
import image36 from '../images/Vignette.jpg';
import image37 from '../images/Why Are You Green.jpg';
import image38 from '../images/nostalgia-time.jpg';


import image39 from '../images/indigo 0.jpg';
import image40 from '../images/indigo i.jpg';
import image41 from '../images/indigo ii.jpg';
import image42 from '../images/indigo iii.jpg';


import image43 from '../images/CITADEL.jpg';
import image44 from '../images/Confessions.jpg';
import image45 from '../images/Fallen Sacrifices.jpg';
import image46 from '../images/Honest Giant.jpg';
import image47 from '../images/i am here for us.jpg';
import image48 from '../images/LOVE.jpg';
import image49 from '../images/Mother.jpg';
import image50 from '../images/Mustapha Theory.jpg';
import image51 from '../images/Our Father.jpg';
import image52 from '../images/Parable Of The Saint.jpg';
import image53 from '../images/Parasite.jpg';
import image54 from '../images/Product Of My Environment.jpg';
import image55 from '../images/SEVER I.jpg';
import image56 from '../images/SEVER II.jpg';
import image57 from '../images/The Final Sacrifice, Nobis.jpg';



import image58 from '../images/Anima Vestra.jpg';
import image59 from '../images/CHRYSALIS IV.jpg';
import image60 from '../images/Do not Hurt The Bird.jpg';
import image61 from '../images/ETORHE.jpg';
import image62 from '../images/forever i am never here.jpg';
import image63 from '../images/John Is Not A Killer.jpg';
import image64 from '../images/Kill Sina.jpg';
import image65 from '../images/L enfance Nue.jpg';
import image66 from '../images/Malignant.jpg';
import image67 from '../images/Midnight Eye (with Britney Walker).jpg';
import image68 from '../images/Portrait Of A Lady On Fire.jpg';
import image69 from '../images/Some Things Are not Meant To Be.jpg';
import image70 from '../images/SPIRITS777.jpg';
import image71 from '../images/The Hermit Dilemma.jpg';
import image72 from '../images/The Powers That Be.jpg';
import image73 from '../images/Time To Save The World.jpg';

import image74 from '../images/Heaven Tears Are Not Rain.jpg';
import image75 from '../images/Wish You Were Here.jpg';




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];



const Collection = () => {
    return(
         <div class="container">
          <nav>
            <Link to='/'>
              <img  src={logo} class="look" alt="logo"/>
            </Link>
          </nav>
          <h2> 2021</h2>
          <div className="item">
        <Carousel breakPoints={breakPoints}>
          <Item  id="imageEnlarge" class="imageSection"><img src={image1}  alt="abbadon"/></Item>
          <Item><img src={image2} class="image2" alt="aurora"/></Item>
          <Item><img src={image3} class="image3" alt="amber"/></Item>
          <Item><img src={image4} class="image4" alt="blindspot"/></Item>
          <Item><img src={image5} class="image5" alt="chysalis II"/></Item>
          <Item><img src={image6} class="image6" alt="chysalis X"/></Item>
          <Item><img src={image7} class="image7" alt="Chrysantheum"/></Item>
          <Item><img src={image8} class="image8" alt="EDVARD MUNCH"/></Item>
          <Item><img src={image9} class="image9" alt="Ex Animo"/></Item>
          <Item><img src={image10} class="image10" alt="fallen fantasy"/></Item>
          <Item><img src={image11} class="image11" alt="Gemini"/></Item>
          <Item><img src={image12} class="image12" alt="HOPE"/></Item>
          <Item><img src={image13} class="image13" alt="HUNDR3D"/></Item>
          <Item><img src={image14} class="image14" alt="Hangman"/></Item>
          <Item><img src={image15} class="image15" alt="III"/></Item>
          <Item><img src={image16} class="image16" alt="In This Light"/></Item>
          <Item><img src={image17} class="image17" alt="John was a farmer"/></Item>
          <Item><img src={image18} class="image18" alt="Liber -Fade"/></Item>
          <Item><img src={image19} class="image19" alt="Liber -Pierce"/></Item>
          <Item><img src={image20} class="image20" alt="Liber -Reach"/></Item>
          <Item><img src={image21} class="image21" alt="Climax390"/></Item>
          <Item><img src={image22} class="image22" alt="Lake Atramento"/></Item>
          <Item><img src={image23} class="image22" alt="Lucy Lullaby"/></Item>
          <Item><img src={image24} class="image22" alt="Lucy Redemption"/></Item>
          <Item><img src={image25} class="image22" alt="MOONCHILD"/></Item>
          <Item><img src={image26} class="image22" alt="Metamorphosis"/></Item>
          <Item><img src={image27} class="image22" alt="Midnight Moon"/></Item>
          <Item><img src={image28} class="image22" alt="PLASTIC"/></Item>
          <Item><img src={image29} class="image22" alt="Putrescence"/></Item>
          <Item><img src={image30} class="image22" alt="ROOTS"/></Item>
          <Item><img src={image31} class="image22" alt="Unrequited love"/></Item>
          <Item><img src={image32} class="image22" alt="Unrequited love II"/></Item>
          <Item><img src={image33} class="image22" alt="Untitled I"/></Item>
          <Item><img src={image34} class="image22" alt="Vanya Vitrol"/></Item>
          <Item><img src={image35} class="image22" alt="Vas Inane"/></Item>
          <Item><img src={image36} class="image22" alt="Vignette"/></Item>
          <Item><img src={image37} class="image22" alt="Why are you green"/></Item>
          <Item><img src={image38} class="image22" alt="nosalgia-time"/></Item>
        </Carousel>
        </div>
        <h2> INDIGO 2022</h2>
        <div className="item">
        <Carousel breakPoints={breakPoints}>
          <Item><img src={image39} class="image1" alt="abbadon"/></Item>
          <Item><img src={image40} class="image2" alt="aurora"/></Item>
          <Item><img src={image41} class="image3" alt="amber"/></Item>
          <Item><img src={image42} class="image4" alt="blindspot"/></Item>
        </Carousel>
        </div>
        <h2>NUMINOUS TRANSIT 2022</h2>
        <div className="item">
        <Carousel breakPoints={breakPoints}>
          <Item><img src={image43} class="image1" alt="abbadon"/></Item>
          <Item><img src={image44} class="image2" alt="aurora"/></Item>
          <Item><img src={image45} class="image3" alt="amber"/></Item>
          <Item><img src={image46} class="image4" alt="blindspot"/></Item>
          <Item><img src={image47} class="image5" alt="chysalis II"/></Item>
          <Item><img src={image48} class="image6" alt="chysalis X"/></Item>
          <Item><img src={image49} class="image7" alt="Chrysantheum"/></Item>
          <Item><img src={image50} class="image8" alt="EDVARD MUNCH"/></Item>
          <Item><img src={image51} class="image9" alt="Ex Animo"/></Item>
          <Item><img src={image52} class="image10" alt="fallen fantasy"/></Item>
          <Item><img src={image53} class="image11" alt="Gemini"/></Item>
          <Item><img src={image54} class="image12" alt="HOPE"/></Item>
          <Item><img src={image55} class="image13" alt="HUNDR3D"/></Item>
          <Item><img src={image56} class="image14" alt="Hangman"/></Item>
          <Item><img src={image57} class="image15" alt="III"/></Item>
        </Carousel>
        </div>
        <h2>2022</h2>
        <div className="item">
        <Carousel breakPoints={breakPoints}>
          <Item><img src={image58} class="image1" alt="abbadon"/></Item>
          <Item><img src={image59} class="image2" alt="aurora"/></Item>
          <Item><img src={image60} class="image3" alt="amber"/></Item>
          <Item><img src={image61} class="image4" alt="blindspot"/></Item>
          <Item><img src={image62} class="image5" alt="chysalis II"/></Item>
          <Item><img src={image63} class="image6" alt="chysalis X"/></Item>
          <Item><img src={image64} class="image7" alt="Chrysantheum"/></Item>
          <Item><img src={image65} class="image8" alt="EDVARD MUNCH"/></Item>
          <Item><img src={image66} class="image9" alt="Ex Animo"/></Item>
          <Item><img src={image67} class="image10" alt="fallen fantasy"/></Item>
          <Item><img src={image68} class="image11" alt="Gemini"/></Item>
          <Item><img src={image69} class="image12" alt="HOPE"/></Item>
          <Item><img src={image70} class="image13" alt="HUNDR3D"/></Item>
          <Item><img src={image71} class="image14" alt="Hangman"/></Item>
          <Item><img src={image72} class="image15" alt="III"/></Item>
          <Item><img src={image73} class="image15" alt="III"/></Item>
        </Carousel>
        </div>
        <h2>2023</h2>
        <div className="item">
        <Carousel breakPoints={breakPoints}>
          <Item><img src={image74} class="image1" alt="abbadon"/></Item>
          <Item><img src={image75} class="image2" alt="aurora"/></Item>
        </Carousel>
        </div>
        </div> 
    );
}



export default Collection;
