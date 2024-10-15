import React from "react";
import "./HomePage.css"
import halloween from "./images/halloween.jpeg";
import livingroomhoodie from "./images/livingroomhoodie.jpeg";
import livingroom from "./images/livingroom.png";
import totefront from "./images/totefront.png";
import toteback from "./images/toteback.png";
import zodiacFront from "./images/zodiacFront.jpg";
import zodiacBack from "./images/zodiacBack.jpg";
import Batty from "./images/Batty.png";
import batsBack from "./images/batsBack.png";
import batsFront from "./images/batsFront.png";



export default function HomePage(){

return(
<div className="HomePage">
    <div className="grid">
    <div className="container">
        <div className="openerSection">
            <div className="row">
                <div className="col-md-12">
                    <img src={halloween} alt="halloween themed ghosts" className="halloween"/>
                </div>
            </div>
         </div>
         <div className="livingroomSection">  
            <div className="row">
                <span className="col-md-6">
                    <img src={livingroomhoodie} alt="black hoodie with print on front" className="LivingRoomHoodie"/>
                </span>
                <span className="col-md-6 livingroomdrawing">
                    <img src={livingroom} alt="ghost in a livingroom" className="LivingRoomGhost"/>
                </span>
            </div>   
        </div>
        <div className="totesSection">
            <div className="row"><img src={totefront} alt="ghost in a livingroom" className="toteFront"/></div>
            <div className="row"><img src={toteback} alt="ghost in a livingroom" className="toteBack"/></div>    
        </div>
        <div className="zodiacSection">
            <div className="row">
                <span className="col-md-6">
                    <img src={zodiacFront} alt="black hoodie with print on front" className="zodiacFront"/>
                </span>
                <span className="col-md-6">
                    <img src={zodiacBack} alt="ghost in a livingroom" className="zodiacBack"/>
                </span>
            </div>
        </div>
        <div className="batSection">
            <div className="row">
                <span className="col-6">
                    <img src={Batty} alt="pink bat" className="batImg img-fluid"/>
                    <a href="/"><button>Shop</button></a>
                </span>
                    <img src={batsBack} alt="hoodie with bats on it" className="batHoodieBack img-fluid row"/>
                    <img src={batsFront} alt="hoodie with bats on it" className="batHoodieFront img-fluid row"/>
            </div>
        </div>
    </div>
    </div>
</div>
)
}