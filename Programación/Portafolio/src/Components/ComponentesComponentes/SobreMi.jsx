import React from "react";
import '../../Styles/ComponentesComponentes/MenuSobreMi.css';
import FotoDePerfil from '../../Img/Foto para Curriculum.png';
import Gmail from '../../Img/Gmail.png';
import UbicaciónGoogleMaps from '../../Img/Ubicacion Maps.png';
import Teléfono from '../../Img/Teléfono.png';
import Twitter from '../../Img/Twitter.png';
import GitHub from '../../Img/GitHub.png';
import LinkedIn from '../../Img/LinkedIn.png';
import BanderaMexicana from '../../Img/Bandera Mexicana.png';
import Curriculum from '../../PDF/CV OAD.pdf';

function SobreMi(){

    return(

        <section className={'Menu-SobreMí'} id={'SobreMí'}>

            <div className={'Foto-Redes-BotónContrátame'}>

                <div className={'FotoDePerfil-SobreMí'}>
                    <img src={FotoDePerfil} alt={'Foto de Perfil'}/>
                </div>

                <div className={'Redes-SobreMí'}>

                    <div className={'Gmail-Redes'}>
                        <a href={'mailto:OmarJoasAD99@gmail.com'} target={'_blank'}><img src={Gmail} alt={'Gmail'}/></a>
                    </div>

                    <div className={'AzcapotzalcoCDMX-Redes'}>
                        <a href={'https://www.google.com.mx/maps/place/Azcapotzalco,+Ciudad+de+M%C3%A9xico,+CDMX'} target={'_blank'}><img src={UbicaciónGoogleMaps} alt={'Azcapotzalco'}/></a>
                    </div>

                    <div className={'CiudadDeMéxicoCDMX-Redes'}>
                        <a href={'https://www.google.com.mx/maps/place/Ciudad+de+M%C3%A9xico,+CDMX'} target={'_blank'}><img src={UbicaciónGoogleMaps} alt={'CDMX'}/></a>
                    </div>

                    <div className={'Teléfono-Redes'}>
                        <a href={'Tel:+525576051513'} target={'_blank'}><img src={Teléfono} alt={'Teléfono'}/></a>
                    </div>

                    <div className={'Twitter-Redes'}>
                        <a href={'https://www.twitter.com/RINT0RIN0'} target={'_blank'}><img src={Twitter} alt={'Twitter'}/></a>
                    </div>

                    <div className={'GitHub-Redes'}>
                        <a href={'https://www.github.com/0marJ0asAD'} target={'_blank'}><img src={GitHub} alt={'GitHub'}/></a>
                    </div>

                    <div className={'LinkedIn-Redes'}>
                        <a href={'https://www.linkedin.com/in/omar-aguilar-d%C3%A1vila-64b99921a/'} target={'_blank'}><img src={LinkedIn} alt={'LinkedIn'}/></a>
                    </div>

                    <div className={'BanderaMexicana-Redes'}>
                        <img src={BanderaMexicana} alt={'Bandera Mexicana'}/>
                    </div>

                </div>

                <div className={'BotónContrátame-SobreMí'}>
                    <a href={Curriculum} target={'_blank'}><button type={'button'}>¡Contrátame!</button></a>
                </div>

            </div>

            <div className={'SobreMí-Información'}>

                <div className={'SobreMí-Texto'}>
                    <h1>Sobre Mí</h1>
                </div>

                <div className={'SobreMí-Descripción'}>
                    <em>Desarrollador Web con Conocimientos en los Siguientes Lenguajes - HTML, CSS, SASS, JavaScript, GSAP, React, Node JS, PHP, SQL, Python, Git y GitHub y sigo aprendiendo cosas nuevas. Mi pasión es el Desarrollo Web y el Campo Tecnológico como lo es la Programación y el Software.</em>
                </div>

            </div>

        </section>

    );

}

export default SobreMi;