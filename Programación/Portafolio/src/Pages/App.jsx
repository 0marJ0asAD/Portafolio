import React from 'react';
import '../Styles/App.css';
import Encabezado from '../Components/Encabezado.jsx';
import Menu from '../Components/Menu';
import Contacto from '../Components/Contacto';

function Portafolio(){

  return(
    <div className="Portafolio">
      <Encabezado/>
      <Menu/>
      <Contacto/>
    </div>
  )

}

export default Portafolio;