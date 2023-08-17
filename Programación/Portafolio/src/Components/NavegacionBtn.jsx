import React from "react";
import '../Styles/NavegacionBtn.css';

export default function NavegaciónBotón(){

    return(

        <div className={'Btn-Hamburguesa'}>

            <input type={"checkbox"} id={'Btn-Menu'}/>

            <label htmlFor={'Btn-Menu'} className={'Label-Menu'}>
                <span id={'Spn-1'}></span>
                <span id={'Spn-2'}></span>
                <span id={'Spn-3'}></span>
            </label>

            <nav className={'Navegación-Btn-SobreMí'}>

                <div className={'Lista-Btn-SobreMí'}>
                    <li><a href="#SobreMí">Sobre Mí</a></li>
                </div>

                <div className={'Lista-Btn-Habilidades'}>
                    <li><a href="#Tecnologías">Habilidades</a></li>
                </div>

                <div className={'Lista-Btn-Proyectos'}>
                    <li><a href="#Proyectos">Proyectos</a></li>
                </div>

                <div className={'Lista-Btn-Contacto'}>
                    <li><a href="#Contacto">Contacto</a></li>
                </div>

            </nav>

        </div>

    );

};