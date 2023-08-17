import React from "react";
import '../Styles/Encabezado.css';
import Logotipo from '../Img/Primer Logotipo.png';
import NavegaciónBotón from "./NavegacionBtn";
import Navegación from "./Navegacion";

export default function Encabezado(){

    return(

        <header className={'Encabezado'}>

            <div className={'Logotipo'}>
                <a href={'/'}><img src={Logotipo} alt={"Logotipo"}/></a>
            </div>

            <NavegaciónBotón/>

            <Navegación/>

        </header>

    );

};