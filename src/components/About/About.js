import "./About.css"
import imagemabout from '../../assets/img/Design sem nome-PhotoRoom.png-PhotoRoom (1).png';



export const About = () => {
    return (
        <div className="About"><div className="linhaa"></div>
            <h1 id="About">About me </h1>
            <div className="texto">
                <h1>HENRIQUE ABADE</h1>
                <p>Olá! sou desenvolvedor web e tenho 18 anos. Desde cedo, desenvolvi uma paixão pelo mundo da tecnologia e decidi focar meu interesse no desenvolvimento web frontend.
                   Com habilidades sólidas em HTML, CSS e JavaScript, posso criar interfaces de usuário bonitas e funcionais. Além disso, domino o React, o que me permite desenvolver aplicações web modernas e escaláveis.
                   Além do frontend, também tenho experiência em Python, uma linguagem versátil que amplia meu conjunto de habilidades e me permite explorar novos horizontes no desenvolvimento.
                   Estou sempre em busca de oportunidades para aprender e crescer, e estou animado para colaborar em projetos desafiadores que me permitam aplicar e expandir meus conhecimentos. Se você está procurando um desenvolvedor apaixonado, 
                   dedicado e com sede de aprendizado, estou pronto para contribuir para o sucesso do seu projeto. Vamos construir algo incrível juntos!</p>
            </div>
            <div className="imagemab">
                <img src={imagemabout}></img>
            </div>
        </div>
    )
}