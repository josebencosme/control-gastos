import React from "react";
const formatearCantidad=(Cantidad)=>{
return Cantidad.toLocaleString('en-US',{
    style:'currency',
    currency:'USD'
})    
}

const ControlPresupuesto = ({presupuesto}) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
      <p>Grafica aqui</p>

      </div>
    <div className="contenido-presupuesto">
        <p>
            <span>
                presupuesto:
            </span>{formatearCantidad(presupuesto)}
        </p>
        <p>
            <span>
                Disponible:
            </span>{formatearCantidad(presupuesto)}
        </p>
        <p>
            <span>
                Gastado:
            </span>{formatearCantidad(presupuesto)}
        </p>
    </div>
    </div>
  );
};

export default ControlPresupuesto;
