import { useState } from 'react';
import React from 'react';
import './App.css';


function App() {


  
  //const [albums, setAlbums] = useState([])

  // const [oxigeno, setOxigeno] = useState([])

// LLAMANDO A LA API 
  //fetch('https://jsonplaceholder.typicode.com/posts')
  //.then(response => response.json())
  //.then((json) => {
    //setAlbums(json)
    //console.log(json)
  //})

  // fetch('https://trininapi/presiondeoxineno')
  // .then(response => response.json())
  // .then((json) => {
  //   setOxigeno(json)
  //   console.log(json)
  // })


  return (
    <div className="App">
      <div className="element-container">
        <div className="flex-group">

        {/* albums.map((item) => (
          <div className="element">
            {item.title}
          </div>
          
          ))*/}
          <div className="element">
            ECG
          </div>

          <div className="element">
            Frecuencia Respiratoria
          </div>

          <div className="element">
          Frecuencia Cardíaca
          </div>

          <div className="element">
          Saturación de Oxígeno en la sangre
          </div>

          <div className="element">
          Reflejo de Pupilas
          </div>

          <div className="element">
          Actividad diaria
          </div>

          <div className="element">
          Audios
          </div> 
        </div>
      </div>
    </div>
  );
}
export default App;
