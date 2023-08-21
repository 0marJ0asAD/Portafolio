import React from "react";
import '../../Styles/ComponentesComponentes/Navegacion.css';

function Navegacion(){

    return(

        <nav className={'Navegación'}>

            <div className={'Listas-SobreMí'}>
                <li><a href="#SobreMí">Sobre Mí</a></li>
            </div>

            <div className={'Listas-Habilidades'}>
                <li><a href="#Habilidades">Tecnologías</a></li>
            </div>

            <div className={'Listas-Proyectos'}>
                <li><a href="#Proyectos">Proyectos</a></li>
            </div>

            <div className={'Lista-Contacto'}>
                <li><a href="#Contacto">Contacto</a></li>
            </div>

        </nav>

    );

}

export default Navegacion;