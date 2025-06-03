import { useState } from "react";

export default function RutinaForm() {

  const [fecha, setFecha] = useState("");
  const [ejercicios, setEjercicios] = useState([
    { 
        nombre: ""
      , series: ""
      , repeticiones: ""
      , peso: "" 
    }
  ]);

  const agregarEjercicio = () => {
    setEjercicios([...ejercicios, 
      { 
          nombre: ""
        , series: ""
        , repeticiones: ""
        , peso: "" 
      }]);
  };

  const handleEjercicioChange = (index, campo, valor) => {
    const nuevos = [...ejercicios];
    nuevos[index][campo] = valor;
    setEjercicios(nuevos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rutina = { fecha, ejercicios };
    console.log("Rutina guardada:", rutina);
    // Aquí puedes enviarla a tu backend o almacenarla localmente
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Crear nueva rutina</h2>

      <label>
        Fecha:
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      </label>

      {ejercicios.map((ej, index) => (
        <fieldset key={index} className="border p-3 rounded">
          <legend>Ejercicio {index + 1}</legend>

          <input
            type="text"
            placeholder="Nombre"
            value={ej.nombre}
            onChange={(e) => handleEjercicioChange(index, "nombre", e.target.value)}
          />

          <input
            type="number"
            placeholder="Series"
            value={ej.series}
            onChange={(e) => handleEjercicioChange(index, "series", e.target.value)}
          />

          <input
            type="number"
            placeholder="Repeticiones"
            value={ej.repeticiones}
            onChange={(e) => handleEjercicioChange(index, "repeticiones", e.target.value)}
          />

          <input
            type="number"
            placeholder="Peso (kg)"
            value={ej.peso}
            onChange={(e) => handleEjercicioChange(index, "peso", e.target.value)}
          />
        </fieldset>
      ))}

      <button type="button" onClick={agregarEjercicio}>➕ Añadir ejercicio</button>
      <button type="submit">💾 Guardar rutina</button>
    </form>
  );
}
