import React from "react";
import '../../Styles/ComponentesComponentes/MenuProyectos.css';
import Proyecto1 from '../../Img/Proyecto 1.png';
import Proyecto2 from '../../Img/Proyecto 2.png';
import Proyecto3 from '../../Img/Proyecto 3.png';

function Proyectos(){

    return(

        <section className={'Menu-Proyectos'} id={'Proyectos'}>

            <div className={'Proyectos-Texto'}>
                <h1>Proyectos</h1>
            </div>

            <div className={'Proyectos-Información'}>

                <div className={'Proyecto1-Información'}>
                    <a href={'https://0marj0asad.github.io/PilaresEdC.github.io/'} target={'_blank'}><img src={Proyecto1} alt={''}/></a>
                </div>

                <div className={'Proyecto2-Información'}>
                    <a href={'https://0marj0asad.github.io/PintorasMexicanasEdC/'} target={'_blank'}><img src={Proyecto2} alt={''}/></a>
                </div>

                <div className={'Proyecto3-Información'}>
                    <a href={'https://0marj0asad.github.io/NuncaDejesDeExplorarElMundo/'} target={'_blank'}><img src={Proyecto3} alt={''}/></a>
                </div>

            </div>

        </section>

    );

}

export default Proyectos;