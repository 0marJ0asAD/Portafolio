import React from "react";
import '../Styles/SobreMi.css';
import FotoDePerfil from '../Img/Foto para Curriculum.png';
import LinkedIn from '../Img/LinkedIn.png';
import GitHub from '../Img/GitHub.png';
import WhatsApp from '../Img/WhatsApp.png';
import Curriculum from '../PDF/CV Omar Aguilar Dávila.pdf';

function SobreMi(){

    return(

        <section className={'Menu-SobreMí'} id={'SobreMí'}>

            <div className={'SobreMí-FotoDePerfilRSyBotónContrato'}>

                <div className={'Imagen-FotoDePerfil'}>
                    <img src={FotoDePerfil} alt={'Foto de Perfil'}/>
                </div>

                <div className={'FotosRedes-RS'}>

                    <div className={'LinkedIn-RS'}>
                        <a href={'https://www.linkedin.com/in/omar-aguilar-d%C3%A1vila-64b99921a/'} target="_blank"><img src={LinkedIn} alt={'LinkedIn'}/></a>
                    </div>

                    <div className={'GitHub-RS'}>
                        <a href={'https://github.com/0marJ0asAD'} target="_blank"><img src={GitHub} alt={'GitHub'}/></a>
                    </div>

                    <div className={'WhatsApp-RS'}>
                        <a href={'tel:+525576051513'} target="_blank"><img src={WhatsApp} alt={'WhatsApp'}/></a>
                    </div>

                </div>

                <div className={'Botón-Contrátame'}>
                    <a href={Curriculum} target={'_blank'}><button type={'button'}>¡Contrátame!</button></a>
                </div>

            </div>

            <div className={'SobreMí-Título'}>
                <h1>Sobre Mí</h1>
            </div>

            <div className={'SobreMí-Descripción'}>
                <em>Desarrollador Web como FrontEnd y BackEnd (FullStack) con ganas de aprender más en mis áreas y con la capacidad de desarrollar aplicaciones web completas, capacidad de autodidacta y seguir aprendiendo cosas nuevas y actualizaciones en el mercado laboral.</em>
            </div>

            <div className={'SobreMí-Columna1-Columna2'}>

                <div className={'SobreMí-Columna1'}>

                    <div className={'Nombre-Columna1'}>
                        <b>Nombre:</b>

                        <em>Omar Aguilar Dávila</em>
                    </div>

                    <div className={'Grado-Columna1'}>
                        <b>Grado:</b>

                        <em>Técnico en Informática</em>
                    </div>

                    <div className={'Edad-Columna1'}>
                        <b>Edad:</b>

                        <em>24 años</em>
                    </div>

                </div>

                <div className={'SobreMí-Columna2'}>

                    <div className={'Ubicación-Columna2'}>
                        <b>Ubicación:</b>

                        <em>Azcapotzalco, Ciudad de México</em>
                    </div>

                    <div className={'Teléfono-Columna2'}>
                        <b>Teléfono:</b>

                        <a href="tel:+525576051513" target="_blank">+52 55 7605 1513</a>
                    </div>

                    <div className={'Correo-Columna2'}>
                        <b>Correo:</b>

                        <a href="mailto:OmarJoasAD99@gmail.com" target="_blank">OmarJoasAD99@gmail.com</a>
                    </div>

                </div>

            </div>

            <div className={'Educación-SobreMí'}>

                <div className={'Educación-Texto'}>
                    <h1>Educación</h1>
                </div>

                <div className="ConalepCMC-Educación">
                    <h1>Conalep Centro México Canadá (2016-2019)</h1>

                    <em>Desarrollador Web apasionado con Experiencia en FrontEnd y BackEnd. Amplio conocimiento en HTML, CSS, SCSS-SASS, JavaScript, GSAP, React, Node JS, PHP, SQL, Python etc. Así como en la implementación de Proyectos. Desarrollador eficiente, Adaptabilidad a Nuevas Tecnologías y Habilidades Autodidactas. Comprometido en Ofrecer soluciones innovadoras y Trabajar en Colaboración para alcanzar Resultados Excepcionales.</em>
                </div>

                <div className={'EdC-Educación'}>
                    <h1>Escuela de Código (2022-2023)</h1>

                    <em>Programador profesional con formación intensiva en el BootCamp de Escuela de Código, especializado en tecnologías como HTML, CSS, SQL y Python. Experiencia práctica adquirida como Programador del 2022 al 2023. Apasionado por el desarrollo de soluciones robustas y eficientes, comprometido con la mejora continua y aprendizaje autodidacta en el campo de la programación. Capacidad demostrada para trabajar en equipo, resolver problemas y entregar resultados de calidad en plazos ajustados.</em>
                </div>

            </div>

            <div className={'Experiencia-SobreMi'}>

                <div className={'Experiencia-Texto'}>
                    <h1>Experiencia</h1>
                </div>

                <div className="ServicioyPracticas-Experiencia">
                    <h1>Control y Automatización (S.A. de C.V.)</h1>

                    <em>Trabajé en Informática en la gestión de archivos en entorno Windows y captura de bases de datos SQL. Durante mi servicio y prácticas profesionales en Control y Automatización S.A. de C.V., desempeñé el rol de Archivero, encargándome de manejar eficientemente los archivos utilizando el Explorador de Archivos de Windows. Además, tuve la oportunidad de participar en la Captura de Bases de Datos SQL en toda la Empresa, Desarrollando Habilidades Sólidas en el Ámbito Informático. Soy trabajador comprometido, orientado a brindar soluciones efectivas en el ámbito Informático como Programador o Desarrollador de Software.</em>
                </div>

            </div>

        </section>

    );

}

export default SobreMi;