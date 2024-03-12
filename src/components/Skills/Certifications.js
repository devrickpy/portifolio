import React from 'react';
import "./Certifications.css"; // Certifique-se de criar este arquivo e vincular ao seu componente

export const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2 className="portfolio-heading">Skills</h2>
            <ul className="skills-list">
                <li>Lógica de programação</li>
                <li>Criação de páginas web</li>
                <li>Criação de páginas dinâmicas</li>
                <li>Manipulação do DOM</li>
                <li>Componentização</li>
                <li>Estilização de páginas web</li>
                <li>Deploy de apps web</li>
                <li>Conhecimento em GIT e GITHUB</li>
                <li>Conhecimentos diversos de desenvolvimento web</li>
            </ul>
        </div>
    );
};

export default Portfolio;


