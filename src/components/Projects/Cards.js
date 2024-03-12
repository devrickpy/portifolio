import "./Cards.css"

export const Card = (props) => {
    return (
        <div id={props.id} >
            <div className="Card">
            <div className="Inner">
            <div className="Front">
               <img src={props.imagem} alt="Project 1" />
               <h1>{props.title}</h1>
               <div id={props.icons} className="links">
                   <i class={props.icon}></i>
                   <i class="fa-brands fa-js"></i>
                   <i class="fa-brands fa-html5"></i>
                   <i class="fa-brands fa-css3-alt"></i>
                </div>
            </div>
            <div className="Back">
              <p>{props.info}</p>
              <div className="redes">
                 <a href={props.link}>PROJETO</a>
                 <a href={props.link2}>CÓDIGO GIT</a>
              </div>
            </div>
          </div>
        </div>
</div>
    )
}