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


  function hecha (a) {
    const newTodos = [...estado];
    newTodos[a].completed = !newTodos[a].completed;
    setTareas(newTodos);
  };

  function addTarea (prop){
    prop.preventDefault();
    Tareas([...estado, { text: otraTarea, completed: false }]);
    setOtraTarea("");
  };

  function EliminarIndividual () {
    const filteredtareas = estado.filter((tarea) => !tarea.completed);
    Tareas(filteredTareas);
  };

  function eliminar () {
    Tareas([]);
  }

  
  return (
      
  );
}

export default App;
