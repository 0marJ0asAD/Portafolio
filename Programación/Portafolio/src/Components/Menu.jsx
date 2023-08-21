import React from "react";
import '../Styles/ComponentesComponentes/Menu.css';
import SobreMi from "./ComponentesComponentes/SobreMi.jsx";
import Tecnologias from "./ComponentesComponentes/Tecnologias.jsx";
import Proyectos from "./ComponentesComponentes/Proyectos.jsx";
import EducacionyExperiencia from "./ComponentesComponentes/EducacionExperiencia";

function Menu(){

    return(

        <main className={'Menu'}>
            <SobreMi/>
            <EducacionyExperiencia/>
            <Tecnologias/>
            <Proyectos/>
        </main>

    );

}

export default Menu;