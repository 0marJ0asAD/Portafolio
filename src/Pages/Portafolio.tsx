import BriefCase from '../Components/Briefcase';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';

export const Portafolio = () => {

    return(
        <>
            <div className={"Layout"}>
                <Header/>
                <BriefCase/>
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
                <BriefCase/>
                <Footer/>
            </div>
        </>
    );

};