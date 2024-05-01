import '../Styles/Portafolio.css';
import PrimerProyecto from '../assets/img/Project 1 - Briefcase.png';
import SegundoProyecto from '../assets/img/Project 2 - Briefcase.png';
import TercerProyecto from '../assets/img/Project 3 - Briefcase.png';;

function BriefCase(){

    return(
        <main className={"Portafolio"} id={"Briefcase"}>

            <div className={"Briefcase__Title"}>
                <h1>Portafolio</h1>
            </div>

            <section className={"Briefcase__Images-Project"}>

                <figure className={"Briefcase__Image1-Project"}>
                    <a href={"https://0marj0asad.github.io/PilaresEdC.github.io/"} target={"_blank"}>
                        <p>Este es mi<br/>Primer Proyecto</p>
                        <img src={PrimerProyecto} title={"Ir al Primer Proyecto"} alt={"Primer Proyecto"}/>
                    </a>
                </figure>

                <figure className={"Briefcase__Image2-Project"}>
                    <a href={"https://0marj0asad.github.io/PintorasMexicanasEdC/"} target={"_blank"}>
                        <p>Este es mi<br/>Segundo Proyecto</p>
                        <img src={SegundoProyecto} title={"Ir al Segundo Proyecto"} alt={"Segundo Proyecto"}/>
                    </a>
                </figure>

                <figure className={"Briefcase__Image3-Project"}>
                    <a href={"https://0marj0asad.github.io/NuncaDejesDeExplorarElMundo/"} target={"_blank"}>
                        <p>Este es mi<br/>Tercer Proyecto</p>
                        <img src={TercerProyecto} title={"Ir al Tercer Proyecto"} alt={"Tercer Proyecto"}/>
                    </a>
                </figure>

            </section>

        </main>
    );

}

export default BriefCase;