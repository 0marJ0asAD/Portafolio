import { Header } from '../Components/Header';
import CV from '../Components/CV';
import { Footer } from '../Components/Footer';

export const Curriculum = () => {

    return(
        <>
            <div className={"Layout"}>
                <Header/>
                <CV/>
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

                <CV/>
                <Footer/>
            </div>
        </>
    );

};