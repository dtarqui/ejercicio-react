import React from "react";
import "../App.css";
function CmpEmpleado({ empleado, cambiarEstadoEmpleado }) {
  return (
    <div className={`empleado-card ${empleado.activo ? "activo" : "inactivo"}`}>
      <p>
        <strong>
          {empleado.apellido} {empleado.nombre}
        </strong>
      </p>
      <p>Cargo: {empleado.puesto}</p>
      <p>
        Estado:{" "}
        <span className={empleado.activo ? "estado-activo" : "estadoinactivo"}>
          {empleado.activo ? "Activo " : "Inactivo "}
        </span>
      </p>
      <button
        className="cambiar-estado-btn"
        onClick={() => cambiarEstadoEmpleado(empleado.id)}
      >
        Cambiar Estado
      </button>
    </div>
  );
}
export default CmpEmpleado;
