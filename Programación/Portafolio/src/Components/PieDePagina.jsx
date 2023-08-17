import React from "react";
import '../Styles/Contacto.css';
import LinkedIn from '../Img/LinkedIn.png';
import GitHub from '../Img/GitHub.png';
import Twitter from '../Img/Twitter.png';
import Gmail from '../Img/Gmail.png';

function Contacto(){

    return(

        <footer className={'PieDePágina-Contacto'} id={'Contacto'}>

            <div className="RedesSociales-Texto">
                <small>Redes Sociales</small>
            </div>

            <div className="RedesSociales-Imagenes">

                <div className="LinkedIn-RS">
                    <a href={'https://www.linkedin.com/in/omar-aguilar-d%C3%A1vila-64b99921a/'} target={'_blank'}><img src={LinkedIn} alt={'LinkedIn'}/></a>
                </div>

                <div className="GitHub-RS">
                    <a href={'https://www.github.com/0marJ0asAD'} target={'_blank'}><img src={GitHub} alt={'GitHub'}/></a>
                </div>

                <div className="Twitter-RS">
                    <a href={'https://www.twitter.com/RINT0RIN0'} target={'_blank'}><img src={Twitter} alt={'Twitter'}/></a>
                </div>

                <div className="Gmail-RS">
                    <a href={'mailto:OmarJoasAD99@gmail.com'} target={'_blank'}><img src={Gmail} alt={'Gmail'}/></a>
                </div>

            </div>

        </footer>

    );

}

export default Contacto;