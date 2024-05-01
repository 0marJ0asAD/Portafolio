import '../Styles/Contacto.css';
import Ubicacion_GoogleMaps from '../assets/img/Ubicacion Google Maps.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact(){
    
    return(
        <main className={"Contacto"} id={"Contact"}>

            <div className={"Contact__Title"}>
                <h1>Contacto</h1>
            </div>

            <section className={"Contact__Content"}>

                <ul className={"Contact__List"}>

                    <li className={"Contact__Location"}>
                        <a href={"https://www.google.com.mx/maps/place/Azcapotzalco,+Ciudad+de+M%C3%A9xico,+CDMX/"} target={"_blank"}>
                            <i className={"fa-solid fa-location-dot"}/>

                            <p>Azcapotzalco</p>
                        </a>
                    </li>

                    <li className={"Contact__Telephone"}>
                        <a href={"tel:+525576051513"} target={"_blank"}>
                            <i className={"fa-solid fa-phone"}/>

                            <p>+52 55 7605 1513</p>
                        </a>
                    </li>

                    <li className={"Contact__Mail"}>
                        <a href={"mailto:OmarJoasAD99@gmail.com"} target={"_blank"}>
                            <i className={"fa-solid fa-envelope"}/>

                            <p>OmarJoasAD99</p>
                        </a>
                    </li>

                    <li className={"Contact__Developer"}>
                        <i className={"fa-solid fa-circle-check"}/>

                        <p>Desarrollador</p>
                    </li>
                </ul>

                <section className={"Map-And-Form"}>

                    <div className={"Contact__Map-GoogleMaps"}>
                        <a href={"https://www.google.com/maps/place/Azcapotzalco,+Ciudad+de+M%C3%A9xico,+CDMX/"} target={"_blank"}><img src={Ubicacion_GoogleMaps} title={"Ir a la Ubicación de Google Maps"} alt={"Ubicación de Google Maps"}/></a>
                    </div>

                    <form className={"Contact__FormContact"} action={"https://formspree.io/f/xrgnlwwd"} method={"post"}>
                        <div className={"Contact__Help"}>
                            <h3>¿Cómo puedo <span id={"Color__Help"}>ayudarte?</span></h3>
                        </div>

                        <label className={"Contact__Label-Name"} htmlFor={"Contact__FormContact"}>
                            <p>Nombre</p>

                            <input type={"text"} name={"Nombre"} placeholder={"Escribe tu Nombre"}/>
                        </label>

                        <label className={"Contact__Label-Email"} htmlFor={"Contact__FormContact"}>
                            <p>Correo</p>

                            <input type={"email"} name={"Correo"} placeholder={"Escribe tu Correo"}/>
                        </label>

                        <label className={"Contact__Label-Asunt"} htmlFor={"Contact__FormContact"}>
                            <p>Asunto</p>

                            <textarea name={"Asunto"} placeholder={"Escribe tu Asunto"}/>
                        </label>

                        <label className={"Contact__Label-Message"} htmlFor={"Contact__FormContact"}>
                            <p>Mensaje</p>

                            <textarea name={"Mensaje"} placeholder={"Escribe tu Mensaje"}/>
                        </label>

                        <div className={"Contact__Label-Send"}>
                            <button type={"submit"}>Enviar</button>
                        </div>

                    </form>

                </section>

            </section>

        </main>
    );

}

export default Contact;