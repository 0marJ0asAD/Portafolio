import Contact from '../Components/Contact';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import '../Styles/Contacto.css';

export const Contacto = () => {

    return(
        <>
            <div className={"Layout"}>
                <Header/>
                <Contact/>
                <Footer/>
            </div>

            <div className={"Layout-Pequeño"}>
                <input type={"checkbox"} id={"Btn-Menu"}/>

                <label htmlFor={"Btn-Menu"} className={"Label-Menu"}>
                    <span id={"Spn-1"}></span>
                    <span id={"Spn-2"}></span>
                    <span id={"Spn-3"}></span>
                </label>

                <label htmlFor={"Btn-Menu"} className={"Label-Header"}>
                    <Header/>
                </label>

                <Contact/>
                <Footer/>
            </div>
        </>
    );

};