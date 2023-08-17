import React from "react";
import '../Styles/Navegacion.css';

export default function Navegación(){

    return(

        <nav className={'Navegación-SobreMí'}>

            <div className={'Lista-SobreMí'}>
                <li><a href="#SobreMí">Sobre Mí</a></li>
            </div>

            <div className={'Lista-Habilidades'}>
                <li><a href="#Tecnologías">Habilidades</a></li>
            </div>

            <div className={'Lista-Proyectos'}>
                <li><a href="#Proyectos">Proyectos</a></li>
            </div>

            <div className={'Lista-Contacto'}>
                <li><a href="#Contacto">Contacto</a></li>
            </div>

        </nav>

    );

};