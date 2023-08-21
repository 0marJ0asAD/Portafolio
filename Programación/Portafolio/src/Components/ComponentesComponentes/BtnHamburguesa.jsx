import React from "react";
import '../../Styles/ComponentesComponentes/BtnHamburguesa.css';

function BtnHamburguesa(){

    return(

        <div className={'Btn-Hamburguesa'}>
            <input type={'checkbox'} id={'Btn-Menu'}/>

            <label htmlFor={'Btn-Menu'} className={'Label-Menu'}>
                <span id={'Spn-1'}/>
                <span id={'Spn-2'}/>
                <span id={'Spn-3'}/>
            </label>

            <nav className={'Listas-Btn-Navegación'}>

                <div className={'Listas-Btn-SobreMí'}>
                    <li><a href="#SobreMí">Sobre Mí</a></li>
                </div>

                <div className={'Listas-Btn-Tecnologías'}>
                    <li><a href="#Habilidades">Tecnologías</a></li>
                </div>

                <div className={'Listas-Btn-Proyectos'}>
                    <li><a href="#Proyectos">Proyectos</a></li>
                </div>

                <div className={'Listas-Btn-Contacto'}>
                    <li><a href="#Contacto">Contacto</a></li>
                </div>

            </nav>
        </div>

    );
}

export default BtnHamburguesa;