import React from 'react';
import "./Cards.css"
import { Card } from './Cards';
import projetofinanças from "../../assets/img/Sem título (1) (1).png";
import projetoportifolio from "../../assets/img/Sem título (2) (1).png";
import projetologin from "../../assets/img/Sem título (3).png";
import { infos } from './info';




export function Projects() {
  return (
    <div className='Projects'>
      <div id='Projects' className='title2'>
        <h1>Projects<div className='linha'></div></h1> 
        <h4>Ao longo da minha jornada como desenvolvedor frontend, 
            tenho explorado profundamente as tecnologias essenciais da web: 
            HTML, CSS e JavaScript. 
            Essas linguagens formam a base sólida sobre a qual construo minhas criações digitais, 
            permitindo-me dar vida a designs e ideias de forma interativa e envolvente.
            Esses são alguns dos meus projetos que fiz usando HTML, CSS, JAVASCRIPT e REACT</h4>
      </div>
        <div className='Cards'>
            <Card 
            id="card1" 
            icons={"icon1"} 
            imagem={projetofinanças} 
            title="RK FINANÇAS" 
            info={infos[0].card1}
            link={"https://devrickpy.github.io/Rastreador-de-valores/"}
            link2={"https://github.com/devrickpy/Rastreador-de-valores"}
            />
            
            <Card 
            id="card2" 
            icons={"icon2"} 
            imagem={projetoportifolio} 
            title="PORTIFÓLIO" 
            icon="fa-brands fa-react" 
            info={infos[1].card2}
            link={"https://devrickpy.github.io/portifolio/"}
            link2={"https://github.com/devrickpy/portifolio"}
            />
            <Card 
            id="card3" 
            icons={"icon3"} 
            imagem={projetologin} 
            title ="TELA LOGIN" 
            info={infos[2].card3}
            link={"https://devrickpy.github.io/telalogin/"}
            link2={"https://github.com/devrickpy/telalogin"}
            />
            
        </div>
    </div>
    
    

  );
}

export default Projects;
