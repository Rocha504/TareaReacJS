import React from 'react';

function Guardado ({ cajas, indice, all}) {
  return (
    <div classname="fondo">
      <input 
        type="checkbox" 
        checked={all.completed} 
        onChange={() => cajas(indice)} 
      />
        {all.text}
    </div>
  );
};

export default Guardado;