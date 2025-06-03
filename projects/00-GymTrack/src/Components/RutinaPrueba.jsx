import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function RutinaPrueba() {

    const [ejercicios, setEjercicios] = useState( () => {
        const save = localStorage.getItem("ejercicios") 
        return save ? JSON.parse(save) : []
    });

    const [ fecha , setFecha] = useState( () => {
        const save = localStorage.getItem("fechaEjercicio");
        return save ? save
            : new Date().toISOString().split('T')[0];
    });

    const handleChange = (index, ca, value) => {
        const ejerciosNuevos = [...ejercicios]
        ejerciosNuevos[index][ca] = value
        setEjercicios(ejerciosNuevos)
        

    const guardarEjercicios = () => {
        localStorage.setItem("ejercicios", JSON.stringify(ejercicios));
        localStorage.setItem("fechaEjercicio" , fecha);
        toast.success("Rutina guardada 👍" , {
            autoClose: 2000,
        });
    };

    const puedeAgregar = () => {

        if (ejercicios.length === 0) { return true; }

        const ejercicio = ejercicios[ejercicios.length - 1]

        return ejercicio.nombre.trim() !== ''
            && ejercicio.series.trim() !== ''
            && ejercicio.repeticiones.trim() !== ''
            && ejercicio.peso.trim() !== ''
    }

    const agregarEjercicio = () => {

        if (!puedeAgregar()) {

            toast.warn("Completa el último ejercicio antes de añadir uno nuevo.", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
            });

            return;
        }

        const data = {
            nombre: '',
            repeticiones: '',
            series: '',
            peso: ''
        };

        const nuevoEjercicio = [...ejercicios, data]
        setEjercicios(nuevoEjercicio)
    }


    const handleRemove = (index) => {
        const nuevosEjercicios = ejercicios.filter((_, i) => i !== index)
        setEjercicios(nuevosEjercicios)
    }

    return (
        <>
            <input id="fecha"
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value) }
                />

            <button onClick={agregarEjercicio} >Añadir ➕</button>
            <button onClick={guardarEjercicios}>Guardar 💾</button>

            {
                ejercicios.map((ejercicio, index) => (

                    <section key={index} className="rutina">

                        <h3>Rutina: {index + 1}</h3>
                        <button onClick={() => handleRemove(index)}>Borrar❌</button>

                        <input required type="text"
                            placeholder="Nombre"
                            onChange={(e) => handleChange(index, 'nombre', e.target.value)}
                            value={ejercicio.nombre} />

                        <input required type="number"
                            placeholder="Repeticiones"
                            onChange={(e) => handleChange(index, 'repeticiones', e.target.value)}
                            value={ejercicio.repeticiones} />

                        <input required type="number"
                            placeholder="Peso"
                            onChange={(e) => handleChange(index, 'peso', e.target.value)}
                            value={ejercicio.peso} />

                        <input required type="number"
                            placeholder="Series"
                            onChange={(e) => handleChange(index, 'series', e.target.value)}
                            value={ejercicio.series} />
                    </section>
                ))
            }

            <ToastContainer />
        </>
    )
}
