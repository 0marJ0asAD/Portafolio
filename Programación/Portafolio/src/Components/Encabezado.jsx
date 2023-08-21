import React from "react";
import '../Styles/ComponentesComponentes/Encabezado.css';
import Logotipo from '../Img/Primer Logotipo.png';
import BtnHamburguesa from "./ComponentesComponentes/BtnHamburguesa";
import Navegacion from "./ComponentesComponentes/Navegacion";

function Encabezado(){

    return(

        <header className={'Encabezado'}>

            <div className={'Logotipo'}>
                <a href={'/'}><img src={Logotipo} alt={'Logotipo'}/></a>
            </div>

            <BtnHamburguesa/>

            <Navegacion/>

        </header>

    );

}

export default Encabezado;