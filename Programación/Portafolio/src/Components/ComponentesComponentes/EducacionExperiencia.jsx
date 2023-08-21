import React from "react";
import '../../Styles/ComponentesComponentes/EducacionExperiencia.css';

function EducacionyExperiencia(){

    return(

        <section className={'Menu-EducaciónyExperiencia'}>

            <div className={'Educación-Texto'}>
                <h1>Educación</h1>
            </div>

            <div className={'Educación-ConalepCMC'}>

                <div className={'ConalepCMC-Texto'}>
                    <b>Informática,</b>

                    <em>Conalep México Canadá (2016-2019)</em>
                </div>

                <div className={'ConalepCMC-Descripción'}>
                    <p>Desarrollador Web apasionado en Tecnologías FrontEnd (y aprendiendo BackEnd también). Conocimiento en HTML, CSS, SCSS-SASS, JavaScript, GSAP, React, Node JS, PHP, SQL, Python etc. Así como en la implementación de Proyectos. Desarrollador eficiente, Adaptabilidad a Nuevas Tecnologías y Habilidades Autodidactas.</p>
                </div>

            </div>

            <div className={'Educación-EdCPilares'}>

                <div className={'EdCPilares-Texto'}>
                    <b>Programación, </b>

                    <em>Escuela de Código</em>
                </div>

                <div className={'EdCPilares-Descripción'}>
                    <p>Programador profesional con formación intensiva en el BootCamp de Escuela de Código, especializado en tecnologías como HTML, CSS, SQL y Python. Experiencia práctica adquirida como Programador del 2022 al 2023. Apasionado por el desarrollo de soluciones robustas y eficientes, comprometido con la mejora continua y aprendizaje autodidacta en el campo de la programación.</p>
                </div>

            </div>

            <div className={'Experiencia-Texto'}>
                <h1>Experiencia</h1>
            </div>

            <div className={'Servicio-Practicas'}>

                <div className={'ServicioPrácticas-Texto'}>
                    <b>Archivero, </b>

                    <em>Control y Automatización S.A. de C.V.</em>
                </div>

                <div className={'ServicioPrácticas-Descripción'}>
                    <p>Trabajé en Informática en la gestión de archivos en entorno Windows y captura de bases de datos SQL. Durante mi servicio y prácticas profesionales en Control y Automatización S.A. de C.V., desempeñé el rol de Archivero, encargándome de manejar eficientemente los archivos utilizando el Explorador de Archivos de Windows. Además, tuve la oportunidad de participar en la Captura de Bases de Datos SQL en toda la Empresa, Desarrollando Habilidades Sólidas en el Ámbito Informático, soy Trabajador Comprometido.</p>
                </div>

            </div>

        </section>

    );

}

export default EducacionyExperiencia;