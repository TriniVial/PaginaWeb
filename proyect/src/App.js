import { useState } from 'react';
import React from 'react';
import './App.css';


function App() {


  const [albums, setAlbums] = useState([])

  const [oxigeno, setOxigeno] = useState([])


  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((json) => {
    setAlbums(json)
    console.log(json)
  })

  // fetch('https://trininapi/presiondeoxineno')
  // .then(response => response.json())
  // .then((json) => {
  //   setOigeno(json)
  //   console.log(json)
  // })


  return (
    <div className="App">
      <div className="element-container">
        <div className="flex-group">

        { albums.map((item) => (
          <div className="element">
            {item.title}
          </div>
          
          ))}
          {/* <div className="element">
            electro
          </div>
          <div className="element">
          frecuencia respiratoria

          </div>
          <div className="element">
          frecuencia cardiaca

          </div>
          <div className="element">
          saturacion

          </div>
          <div className="element">
          reflejo de pupilas

          </div>
          <div className="element">
          avance diario

          </div>
          <div className="element">
          audio
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default App;
