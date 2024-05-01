import '../Styles/Footer.css';

export const Footer = () => {

    return(
        <aside className={"BarraLateral"} id={"Aside"}>

            <ul className={"Sections-Sitios"}>

                <li className={"Inicio-SitioWeb"}>
                    <a href={"/"}>
                        <i className={"Menu__Icon fa-solid fa-house"} title={"Ir al Home Page"}></i>
                    </a>
                </li>

                <li className={"SobreMi-SitioWeb"}>
                    <a href={"/SobreMi"}>
                        <i className={"Menu__Icon fa-solid fa-user"} title={"Ir a Sobre Mí"}></i>
                    </a>
                </li>

                <li className={"Curriculum-SitioWeb"}>
                    <a href={"/Curriculum"}>
                        <i className={"Menu__Icon fa-solid fa-graduation-cap"} title={"Ir al Curriculum"}></i>
                    </a>
                </li>

                <li className={"Portafolio-SitioWeb"}>
                    <a href={"/Portafolio"}>
                        <i className={"Menu__Icon fa-solid fa-briefcase"} title={"Ir al Portafolio"}></i>
                    </a>
                </li>

                <li className={"Contacto-SitioWeb"}>
                    <a href={"/Contacto"}>
                        <i className={"Menu__Icon fa-solid fa-envelope"} title={"Ir al Contacto"}></i>
                    </a>
                </li>

            </ul>

        </aside>
    );

};