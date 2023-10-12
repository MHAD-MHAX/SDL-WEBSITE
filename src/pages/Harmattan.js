import React from "react";
import { Link } from "react-router-dom";



import logo from '../images/logo-3.png';



const Harmattan = () => {
    return(
        <div class="harma">
          <nav>
          <Link to='/'>
              <img  src={logo} class="angel" alt="logo"/>
            </Link>
          </nav>
          <p class="font-face-p">
          as we lay on a couch in a broken house at dusk,
          listening to our static, our hearts beat, heartbeats,
          i feel you in me, near your love and your pain,
          your smile and your stoic stare into nothingness,
          that moment the real you bleeds through.
          i only see you in harmattan and we are not in love, we just are,
          a friend but something more, i know you and you can see through me,
          so never leave, never fly without me, harmattan's angel.
         <br></br>
         <br></br>
          -sdl
          </p>
        
        </div>
    );
}


export default Harmattan;




