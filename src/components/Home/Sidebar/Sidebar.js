import React from 'react';
import './Sidebar.css'; 
import MinhaImagem from '../../../assets/img/Modern_Minimalist_Graffiti_Dream_Brand_Logo__2_-removebg-preview.png';

export const Sidebar = () => {
    const scrollToContent = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="sidebar">
            <div className="Imagem">
                <img src={MinhaImagem} alt="Minha Imagem" />
            </div>
            <div className="siders">
                <a onClick={() => scrollToContent('home')}>Home</a>
                <a onClick={() => scrollToContent('Skills')}>Skills</a>
                <a onClick={() => scrollToContent('Projects')}>Projects</a>
                <a onClick={() => scrollToContent('About')}>About Me</a>
                <a onClick={() => scrollToContent('Contact')}>Contact</a>
            </div>
        </div>
        
    );
};

