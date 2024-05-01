import '../Styles/Header.css';
import CV_OAD from '../assets/PDF/CV OAD.pdf';

export const Header = () => {

    return(
        <header className={"Encabezado"} id={"Header"}>

            <div className={"Foto-De-Perfil"}>
                <img src={"https://www.github.com/0marJ0asAD.png"} alt={"Foto de Perfil"} title={"Foto de Perfil del Usuario"}/>
            </div>

            <div className={"NombreCompleto"}>
                <h2>Omar Aguilar Dávila</h2>
            </div>

            <div className={"Profesión"}>
                <h4><em>Técnico en Informática</em></h4>
            </div>

            <nav className={"Links-Social"}>

                <ul className={"Navegacion-LinksSocial"}>

                    <li className={"Option-LinksSocial"}>
                        <a href={"mailto:OmarJoasAD99@gmail.com"} target={"_blank"}>
                            <i className={"fa-solid fa-envelope"} id={"Correo-LinksSocial__Option"}></i>
                        </a>
                    </li>

                    <li className={"Option-LinksSocial"}>
                        <a href={"tel:+525576051513"} target={"_blank"}>
                            <i className={"fa-solid fa-phone"} id={"Teléfono-Social__Option"}></i>
                        </a>
                    </li>

                    <li className={"Option-LinksSocial"}>
                        <a href={"https://api.whatsapp.com/send/?phone=%2B525576051513&text&type=phone_number&app_absent=0"} target={"_blank"}>
                            <i className={"fa-brands fa-whatsapp"} id={"WhatsApp-Social__Option"}></i>
                        </a>
                    </li>

                    <li className={"Option-LinksSocial"}>
                        <a href={"https://www.x.com/RINT0RIN0"} target={"_blank"}>
                            <i className={"fa-brands fa-twitter"} id={"TwitterX-Social__Option"}></i>
                        </a>
                    </li>

                    <li className={"Option-LinksSocial"}>
                        <a href={"https://www.github.com/0marJ0asAD"} target={"_blank"}>
                            <i className={"fa-brands fa-github"} id={"GitHub-Social__Option"}></i>
                        </a>
                    </li>

                    <li className={"Option-LinksSocial"}>
                        <a href={"https://www.linkedin.com/in/omar-aguilar-d%C3%A1vila-64b99921a/"} target={"_blank"}>
                            <i className={"fa-brands fa-linkedin-in"} id={"LinkedIn-Social__Option"}></i>
                        </a>
                    </li>

                </ul>

            </nav>

            <div className={"Boton-DescargarCV"}>
                <a href={CV_OAD} download={"Curriculum Vitae OAD"} target={"_blank"}><button type={"button"}>Descargar CV</button></a>
            </div>

            <footer className={"PieDePágina"} id={"Footer"}>
                <small>&copy; 2024 Omar Aguilar Dávila</small>
            </footer>

        </header>
    );

};