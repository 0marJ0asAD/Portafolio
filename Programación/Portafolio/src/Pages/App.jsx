import '../Styles/App.css';
import Encabezado from '../Components/Encabezado';
import Menu from '../Components/Menu';
import Contacto from '../Components/PieDePagina';

export default function Portafolio(){

  return(

    <div className={'Página-Principal'}>

      <Encabezado/>
      <Menu/>
      <Contacto/>

    </div>

  );

}