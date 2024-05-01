import '../Styles/About.css';

function About(){

    return(
        <main className={"SobreMi"} id={"About"}>

            <header className={"About__Title"}>
                <h1>Sobre <span className={"Color__Title"}>Mí</span></h1>
            </header>

            <section className={"About__Description"}>

                <div className="About__Description-MyDescription">
                    <em>Soy Cristiano Evángelico, me encanta la Informática sobre todo el tema de Desarrollo de Aplicaciones Web, y en general todos los temas de Computación aunque diría que mi especialidad es el Software, soy Trabajador, Responsable y más. Mi Pasión es la Tecnología en general y más en concreto el Desarrollo Web</em>
                </div>

                <ul className="About__Description-MyInformation">

                    <li className="About__Description-MyOptions">
                        <span className="Description__Title">Edad: </span>
                        <span className="Description__SubTitle">24 años</span>
                    </li>

                    <li className="About__Description-MyOptions">
                        <span className="Description__Title">País: </span>
                        <span className="Description__SubTitle">México</span>
                    </li>

                    <li className="About__Description-MyOptions">
                        <span className="Description__Title">Ayuntamiento: </span>
                        <span className="Description__SubTitle">Azcapotzalco</span>
                    </li>

                    <li className="About__Description-MyOptions">
                        <span className="Description__Title">Correo: </span>
                        <span className="Description__SubTitle"><a className={"Description__SubTitle-Enlaces"} href={"mailto:OmarJoasAD99@gmail.com"} target={"_blank"}>OmarJoasAD99gmail.com</a></span>
                    </li>

                    <li className="About__Description-MyOptions">
                        <span className="Description__Title">Teléfono: </span>
                        <span className="Description__SubTitle"><a className={"Description__SubTitle-Enlaces"} href={"tel:+525576051513"} target={"_blank"}>+52 55 7605 1513</a></span>
                    </li>

                </ul>

            </section>

            <header className={"WhatIDO__SubTitle"}>
                <h2>Lo que <span className="Color__SubTitle">hago</span></h2>
            </header>

            <section className={"WhatIDO__Education"}>

                <article className={"Education__WhatIDO"}>

                    <div className={"Education__Icon"}>
                        <i className={"fa-solid fa-computer"}></i>
                    </div>

                    <div className={"Education__Title-And-SubTitle"}>
                        <h4>Informática, <em>CONALEP Centro México Canadá</em></h4>

                        <h5>Informático con Habilidad Especial en Desarrollo Web apasionado en Tecnologías FrontEnd (y aprendiendo BackEnd también). Conocimiento en HTML, CSS, SCSS-SASS, JavaScript, React, Node JS, PHP, SQL, Python etc. (Incluyendo Office como Word, Excel, PowerPoint, Access, etc.) Así como en la implementación de Proyectos. Desarrollador eficiente, Adaptabilidad a Nuevas Tecnologías y Habilidades Autodidactas</h5>
                    </div>

                </article>

                <article className={"Education__WhatIDO"}>

                    <div className={"Education__Icon"}>
                        <i className={"fa-solid fa-code"}></i>
                    </div>

                    <div className={"Education__Title-And-SubTitle"}>
                        <h4>Programación, <em>Escuela de Código</em></h4>

                        <h5>Programador profesional con formación intensiva en el BootCamp de Escuela de Código, especializado en tecnologías como HTML, CSS, SQL y Python. Experiencia práctica adquirida como Programador del 2022 al 2023. Apasionado por el desarrollo de soluciones robustas y eficientes, comprometido con la mejora continua y aprendizaje autodidacta en el campo de la programación.</h5>
                    </div>

                </article>

            </section>

            <section className={"WhatIDO__Experience"}>

                <article className={"Experience__WhatIDO"}>

                    <div className={"Experience__Icon"}>
                        <i className={"fa-solid fa-chalkboard-user"}></i>
                    </div>

                    <div className={"Experience__Title-And-SubTitle"}>
                        <h4>Capturista de Datos, <em>Control y Automatización para Procesos A&B, S.A. de C.V.</em></h4>

                        <h5>Trabajé en Informática en la gestión de archivos en entorno Windows y Captura de Bases de Datos SQL. Durante mis Prácticas Profesionales en Control y Automatización para Procesos A&B, S.A. DE C.V., desempeñé el Rol de Capturista de Datos, encargándome de manejar eficientemente los archivos utilizando el Explorador de Archivos de Windows. Además, tuve la oportunidad de participar en la Captura de Bases de Datos SQL en toda la Empresa, Desarrollando Habilidades Sólidas en el Ámbito Informático, soy Trabajador Comprometido.</h5>
                    </div>

                </article>

            </section>

        </main>
    );

}

export default About;