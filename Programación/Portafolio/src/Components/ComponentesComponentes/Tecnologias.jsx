import React from "react";
import '../../Styles/ComponentesComponentes/MenuTecnologias.css';
import MicrosoftWord from '../../Img/Microsoft Word.png';
import MicrosoftExcel from '../../Img/Microsoft Excel.png';
import MicrosoftPowerPoint from '../../Img/Microsoft PowerPoint.png';
import MicrosoftAccess from '../../Img/Microsoft Access.png';
import HTML5 from '../../Img/HTML.png';
import CSS3 from '../../Img/CSS.png';
import SASS from '../../Img/SASS.png';
import JavaScript from '../../Img/JavaScript.png';
import GSAP from '../../Img/GSAP.png';
import ReactJS from '../../Img/React JS.png';
import NodeJS from '../../Img/Node JS.png';
import PHP from '../../Img/PHP.png';
import SQL from '../../Img/SQL.png';
import Python from '../../Img/Python.png';
import Git from '../../Img/Git.png';
import GitHub from '../../Img/GitHub.png';

function Tecnologias(){

    return(

        <section className={'Menu-Habilidades'} id={'Habilidades'}>

            <div className={'Tecnologías-Texto'}>
                <h1>Tecnologías</h1>
            </div>

            <div className={'Tecnologías-Información'}>

                <div className={'Tecnologías-Parte1'}>

                    <div className={'HTML5'}>
                        <b>HTML</b>

                        <img src={HTML5} alt={'HTML'}/>
                    </div>

                    <div className={'CSS3'}>
                        <b>CSS</b>

                        <img src={CSS3} alt={'CSS'}/>
                    </div>

                    <div className={'SASS'}>
                        <b>SCSS</b>

                        <img src={SASS} alt={'SASS'}/>
                    </div>

                    <div className={'JavaScript'}>
                        <b>JavaScript</b>

                        <img src={JavaScript} alt={'JS'}/>
                    </div>

                </div>

                <div className={'Tecnologías-Parte2'}>

                    <div className={'GSAP'}>
                        <b>GSAP</b>

                        <img src={GSAP} alt={'GSAP'}/>
                    </div>

                    <div className={'ReactJS'}>
                        <b>ReactJS</b>

                        <img src={ReactJS} alt={'React JS'}/>
                    </div>

                    <div className={'NodeJS'}>
                        <b>NodeJS</b>

                        <img src={NodeJS} alt={'Node JS'}/>
                    </div>

                    <div className={'PHP'}>
                        <b>PHP</b>

                        <img src={PHP} alt={'PHP'}/>
                    </div>

                </div>

                <div className={'Tecnologías-Parte3'}>

                    <div className={'SQL'}>
                        <b>SQL</b>

                        <img src={SQL} alt={'SQL'}/>
                    </div>

                    <div className={'Python'}>
                        <b>Python</b>

                        <img src={Python} alt={'Python'}/>
                    </div>

                    <div className={'Git'}>
                        <b>Git</b>

                        <img src={Git} alt={'Git'}/>
                    </div>

                    <div className={'GitHub'}>
                        <b>GitHub</b>

                        <img src={GitHub} alt={'GitHub'}/>
                    </div>

                </div>

                <div className={'Tecnologías-Parte4'}>

                    <div className={'Microsoft-Word'}>
                        <b>Word</b>

                        <img src={MicrosoftWord} alt={'Word'}/>
                    </div>

                    <div className={'Microsoft-Excel'}>
                        <b>Excel</b>

                        <img src={MicrosoftExcel} alt={'Excel'}/>
                    </div>

                    <div className={'Microsoft-PowerPoint'}>
                        <b>PowerPoint</b>

                        <img src={MicrosoftPowerPoint} alt={'PowerPoint'}/>
                    </div>

                    <div className={'Microsoft-Access'}>
                        <b>Access</b>

                        <img src={MicrosoftAccess} alt={'Access'}/>
                    </div>

                </div>

            </div>

        </section>

    );

}

export default Tecnologias;