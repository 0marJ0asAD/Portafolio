import React from "react";
import SobreMi from "./SobreMi";
import Habilidades from "./Tecnologías";
import Proyectos from "./Proyectos";

function Menu(){

    return(

        <main className={'Menu'}>

            <SobreMi/>
            <Habilidades/>
            <Proyectos/>

        </main>

    );

};

export default Menu;