import React from 'react';
import "./Skills.css";
import javascriptLogo from "../../assets/icons/javascript-logo-javascript-icon-transparent-free-png.webp";
import htmlLogo from "../../assets/icons/1532556.png";
import cssLogo from "../../assets/icons/css-512.webp";
import reactLogo from "../../assets/icons/React-icon.svg.png";
import pythonLogo from "../../assets/icons/Python-logo-notext.svg.png";
import gitLogo from "../../assets/icons/images-Photoroom.png-Photoroom (2).png";

export const Skills = () => {
    return (
        <div>
        <div className='title'>
            <h1 id='Skills'>Skills<div className='linhas'></div></h1>
        </div>
        <div className="Skills">
            <h1>Tecnologies</h1>
            <div className="top-row">
                <div className="skill" id='divjs'>
                    <img className='js' src={javascriptLogo} alt="Javascript" />
                    <span className='ajust'>Javascript</span>
                </div>
                <div className="skill">
                    <img className='null' src={htmlLogo} alt="HTML" />
                    <span>HTML</span>
                </div>
                <div className="skill">
                    <img className='css' src={cssLogo} alt="CSS" />
                    <span>CSS</span>
                </div>
            </div>
            <div className="bottom-row">
                <div className="skill2">
                    <img  src={reactLogo} alt="React" />
                    <span>React</span>
                </div>
                <div className="skill2">
                    <img src={pythonLogo} alt="Python" />
                    <span className='ajust'>Python</span>
                </div>
                <div className="skill2">
                    <img className='git' src={gitLogo} alt="Git" />
                    <span>Git</span>
                </div>
            </div>
        </div>
        </div>
    );
};

