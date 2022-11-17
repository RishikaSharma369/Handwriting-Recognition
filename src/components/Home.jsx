
import React from "react";
import "../Styles/home.css";
import"../Styles/homeImg.css";
import bgImg from '../images/cyber-bg.png';

const Home = ()=>{

    return(

        
        <div className="main">
            <div className="text">
                <h1 className="heading">Bengal School of Technology and Management</h1>
                <div className="info">
                <p style={{fontWeight:"bold",fontFamily:"monospace"}}>Rishika Sharma</p>
                <p style={{fontWeight:"bold",fontFamily:"monospace"}}>Minor Project-2022</p>
                <p style={{fontWeight:"bold",fontFamily:"monospace"}}>Handwriting Recognition</p>
                </div>
                <div className="extraInfo">
                <h1>Cloud Computing Technology</h1>
                <h3>Recognize the unrecognize!</h3>
                </div>
            </div>
            <div className="button">
                <a href="/upload">
                <button className="get-started" >Get Started</button>
                </a>
            </div>
            <div className="image">
                <img src={bgImg} alt="/" height="auto" width="40%" id="image-section" />
            </div>
        </div>
        
    );
}

export default Home;