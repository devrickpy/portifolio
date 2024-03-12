import "./Home.css"
import imagemhome from '../../assets/img/Home_art 1 (1).svg'
import cv from '../../assets/documents/Curriculo (1).pdf'

export const Home = () => {
    return (
        <div  className="home">
            <div className="info">
                <p>Hello - </p>
                <h1>HENRIQUE ABADE</h1>
                <h4>FRONT END <span>DEVELOPER</span></h4>
                <p>Welcome to my portifolio!</p>
            </div>
            <div className="homeimg">
                <img src={imagemhome}></img>
            </div>
        </div>
    )
}

export const Download = () => {
    return (
        <div className="button">
            <a href={cv} download>Download CV</a>
        </div>
    )
}

export const Links = () => {
    return (
        <div className="linkss">
            <a href="https://github.com/devrickpy" class="fa-brands fa-github"></a>
            <a href="https://www.instagram.com/_rickd7/" class="fa-brands fa-instagram"></a>
            <a href="https://www.linkedin.com/in/henrique-abade-1a80a72b0/" class="fa-brands fa-linkedin-in"></a>
        </div>
    )

    
}