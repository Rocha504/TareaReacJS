import React, { useState, useEffect } from "react";
import Guardado from "./Guardado.js";
import './App.css';


function App() {
  
   
  const [estado, Tareas] = useState(
    JSON.parse(localStorage.getItem("estado")) || []
  );


  const [otraTarea, setOtraTarea] = useState("");

  useEffect(() => {
    localStorage.setItem("estado", JSON.stringify(estado));
  }, [estado]);


  function cajas (a) {
    const nuevasTareas = [...estado];
    nuevasTareas[a].completed = !nuevasTareas[a].completed;
    Tareas(nuevasTareas);
  };

  function addTarea (prop){
    prop.preventDefault();
    Tareas([...estado, { text: otraTarea, completed: false }]);
    setOtraTarea("");
  };

  function EliminarIndividual () {
    const AT = estado.filter((tarea) => !tarea.completed);
    Tareas(AT);
  };

  function eliminar () {
    Tareas([]);
  }

  
  return (
    <div className="centrado">
    <h1>Cosas por hacer</h1>
    <form onSubmit={addTarea}>
      <input
        type="text"
        value={otraTarea}
        onChange={(e) => setOtraTarea(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>

    {estado.map((all, indice) => (
      <Guardado key={indice} indice={indice} all={all} cajas={cajas}/> 
      ))}

    <button onClick={eliminar}>Eliminar </button>
    <button onClick={EliminarIndividual}>Eliminar tareas realizadas</button>
  </div>
  );
}

export default App;
