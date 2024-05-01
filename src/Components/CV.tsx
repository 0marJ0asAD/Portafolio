import '../Styles/CV.css';

function CV(){

    return(
        <main className={"Curriculum"} id={"CurriculumVitae"}>
            <div className={"CurriculumVitae-Title"}>
                <h1>Curriculum</h1>
            </div>

            <div className={"Formacion-Y-Habilidades"}>
                <section className={"Formación"}>
                    <header className={"Formacion__Title"}>
                        <h2>Formación</h2>
                    </header>

                    <section className={"Formacion__Content"}>
                        <div className={"Formacion__Año"}>
                            <b>2016 - 2019</b>
                            <br/>
                            <p>CONALEP Centro México Canadá</p>
                        </div>

                        <div className={"Formacion__Separador"}>
                            <i className={"fa-solid fa-bomb"}></i>
                        </div>

                        <div className={"Formacion__Descripcion"}>
                            <b>Técnico en Informática</b>
                            <br/>
                            <p><em>Aprendí aspectos Informáticos más con relación a Desarrollo de Software como lo es Desarrollo Web con HTML y CSS (lo básico obvio), Bases de Datos con SQL, Java, C++, entre otros Lenguajes, también un poco de Mantenimiento de Computadoras, sin embargo mi enfoque va más con relación al Desarrollo de Software que contaré a continuación en el apartado de Desarrollo de Software por que es lo que más me gusta hacer en estos ámbitos de Computación verdaderamente.</em></p>
                        </div>
                    </section>
                </section>

                <section className={"Habilidades"}>
                    <header className={"Habilidades__Title"}>
                        <h2>Lenguajes <span className={"Color__Title"}>Código</span></h2>
                    </header>

                    <section className={"Habilidades__Content"}>
                        <div className={"Habilidades__HTML"}>
                            <p>HTML</p>

                            <i className={"fa-brands fa-html5"}></i>
                        </div>

                        <div className={"Habilidades__CSS"}>
                            <p>CSS</p>

                            <i className={"fa-brands fa-css3-alt"}></i>
                        </div>

                        <div className={"Habilidades__JavaScript"}>
                            <p>JavaScript</p>

                            <i className={"fa-brands fa-js"}></i>
                        </div>

                        <div className={"Habilidades__Node"}>
                            <p>Node JS</p>

                            <i className={"fa-brands fa-node"}></i>
                        </div>

                        <div className={"Habilidades__React"}>
                            <p>React</p>

                            <i className={"fa-brands fa-react"}></i>
                        </div>
                    </section>

                    <section className={"Habilidades__Content"}>
                        <div className={"Habilidades__Angular"}>
                            <p>Angular</p>

                            <i className={"fa-brands fa-angular"}></i>
                        </div>

                        <div className={"Habilidades__PHP"}>
                            <p>PHP</p>

                            <i className={"fa-brands fa-php"}></i>
                        </div>

                        <div className={"Habilidades__SQL"}>
                            <p>SQL</p>

                            <i className={"fa-solid fa-database"}></i>
                        </div>

                        <div className={"Habilidades__Python"}>
                            <p>Python</p>

                            <i className={"fa-brands fa-python"}></i>
                        </div>
                    </section>
                </section>
            </div>

            <section className={"Formacion__Content"} id={"SegundaFormacion"}>
                <div className={"Formacion__Año"} id={"Formacion__SegundoAño"}>
                    <b>2021 en Adelante</b>
                    <br/>
                    <p>Escuela<br/>Código<br/>PILARES<br/>y<br/>Auto<br/>didacta</p>
                </div>

                <div className={"Formacion__Separador"} id={"SegundaFormacion__Separador"}>
                    <i className={"fa-solid fa-bomb"}></i>
                </div>

                <div className={"Formacion__Descripcion"} id={"SegundaFormacion__Descripcion"}>
                    <b>Desarrollo de Software</b>
                    <br/>
                    <p>En Escuela de Código aprendí todo lo que es HTML, CSS, SQL y Python al menos lo básico, ya como Autodidacta me encargué de perfeccionar mis conocimientos por ejemplo con Cursos de Udemy y de hacer Proyectos por mi cuenta con los mismos, por ejemplo con Master en CSS, pero es que no solo aprendí éso, también FrameWorks de JavaScript como lo es React, Angular y así con el Master en FrameWorks de JavaScript, tengo Master en PHP, SQL, Laravel, Symphony y más y estoy practicando en Proyectos para de ese tipo incluso de un Master en Python o sea en general todo para ser un Gran Desarrollador Web. Realmente es esto algo que me apasiona.</p>
                </div>
            </section>
        </main>
    );

}

export default CV;