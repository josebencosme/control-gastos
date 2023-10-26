import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");
  const HandLePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es válido");
      return;
    }
    setMensaje("");
    setIsValidPresupuesto(true)
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={HandLePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir tu presupuesto" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
