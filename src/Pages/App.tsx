import '../Styles/App.css';
import { Header } from '../Components/Header';
import Home from '../Components/Home';
import { Footer } from '../Components/Footer';

function App(){
  return(
    <>
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

        <Home/>
        <Footer/>
      </div>

      <div className={"Layout"}>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </>
  );
}

export default App;