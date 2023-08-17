import React from "react";
import '../Styles/Proyectos.css';
import ProyectoUno from '../Img/Proyecto 1.png';
import ProyectoDos from '../Img/Proyecto 2.png';
import ProyectoTres from '../Img/Proyecto 3.png';

function Proyectos(){

    return(

        <section className={'Menu-Proyectos'} id={'Proyectos'}>

            <div className="Menu-ProyectosTexto">
                <h1>Proyectos</h1>
            </div>

            <div className="Proyectos-Menu">

                <div className={"Menu-ProyectoUno"}>
                    <a href={'https://0marj0asad.github.io/PilaresEdC.github.io/'} target={'_blank'}><img src={ProyectoUno} alt={'Proyecto 1'}/></a>
                </div>

                <div className={"Menu-ProyectoDos"}>
                    <a href={'https://0marj0asad.github.io/PintorasMexicanasEdC/'} target={'_blank'}><img src={ProyectoDos} alt={'Proyecto 2'}/></a>
                </div>

                <div className={"Menu-ProyectoTres"}>
                    <a href={'https://0marj0asad.github.io/NuncaDejesDeExplorarElMundo/'} target={'_blank'}><img src={ProyectoTres} alt={'Proyecto 3'}/></a>
                </div>

            </div>

        </section>

    );

}

export default Proyectos;