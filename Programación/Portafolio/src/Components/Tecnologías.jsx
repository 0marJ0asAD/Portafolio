import React from "react";
import '../Styles/Tecnologias.css';
import HTML5 from '../Img/HTML.png';
import CSS3 from '../Img/CSS.png';
import SCSS from '../Img/SASS.png';
import JavaScript from '../Img/JavaScript.png';
import GSAP from '../Img/GSAP.png';
import ReactJS from '../Img/React JS.png';
import NodeJS from '../Img/Node JS.png';
import PHP from '../Img/PHP.png';
import SQL from '../Img/SQL.png';
import Python from '../Img/Python.png';
import Git from '../Img/Git.png';
import GitHub from '../Img/GitHub.png';

function Habilidades(){

    return(

        <section className={'Menu-Tecnologías'} id={'Tecnologías'}>

            <div className="Tecnologías-Título">
                <h1>Tecnologías</h1>
            </div>

            <div className={'Tecnologías-Parte1'}>

                <div className="HTML5">
                    <b>HTML</b>

                    <img src={HTML5} alt={'HTML'}/>
                </div>

                <div className="CSS3">
                    <b>CSS</b>

                    <img src={CSS3} alt={'CSS'}/>
                </div>

                <div className="SASS-SCSS">
                    <b>SASS</b>

                    <img src={SCSS} alt={'SASS'}/>
                </div>

                <div className="JavaScript-JS">
                    <b>JavaScript</b>

                    <img src={JavaScript} alt={'JavaScript'}/>
                </div>

            </div>

            <div className={'Tecnologías-Parte2'}>

                <div className="GSAP">
                    <b>GSAP</b>

                    <img src={GSAP} alt={'GSAP'}/>
                </div>

                <div className="React-JS">
                    <b>React JS</b>

                    <img src={ReactJS} alt={'React JS'}/>
                </div>

                <div className="Node-JS">
                    <b>Node JS</b>

                    <img src={NodeJS} alt={'Node JS'}/>
                </div>

                <div className="PHP">
                    <b>PHP</b>

                    <img src={PHP} alt={'PHP'}/>
                </div>

            </div>

            <div className={'Tecnologías-Parte3'}>

                <div className="SQL">
                    <b>SQL</b>

                    <img src={SQL} alt={'SQL'}/>
                </div>

                <div className="Python">
                    <b>Python</b>

                    <img src={Python} alt={'Python'}/>
                </div>

                <div className="Git">
                    <b>Git</b>

                    <img src={Git} alt={'Git'}/>
                </div>

                <div className="GitHub">
                    <b>GitHub</b>

                    <img src={GitHub} alt={'GitHub'}/>
                </div>

            </div>

        </section>

    );

}

export default Habilidades;