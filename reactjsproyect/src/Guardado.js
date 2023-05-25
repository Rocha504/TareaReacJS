import React from 'react';

function Guardado ({ cajas, indice, all}) {
  return (
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