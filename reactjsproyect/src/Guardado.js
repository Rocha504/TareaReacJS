import React from 'react';

function Guardado ({ cajas, indice, all}) {
  return (
    // Este componente retorna un div que contiene un checkbox y un span que muestra el texto de la tarea.
    <div>
      <input 
        type="checkbox" 
        checked={all.completed} 
        onChange={() => cajas(indice)} 
      />
      <span style={{ textDecoration: all.completed ? "line-through" : "" }}>
        {all.text}
      </span>
    </div>
  );
};

export default Guardado;