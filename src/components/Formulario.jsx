import React, {useState} from 'react'

const Formulario = () => {
    const [fruta, setFruta] = useState("")
    const [descripcion, setDescripcion] = useState("")
    //creando un state para guardar los nuevos parametros del formulario en un array
    const [lista, setLista] = useState([])
    //Validando datos de un formulario, usando preventdefault para evitar el metodo GET,
    //validando que no esté vacio con trim() usando su negación en los if
    // mandando un mensaje cuando hay strings en ambos inputs
    //y limpiando formulario luego del submit
    const guardarDatos = (e) => {
        e.preventDefault()

        if (!fruta.trim()) {
            const fruta = document.getElementById("fruta")
            fruta.innerHTML = "Se necesita fruta"
            return
        }
        if (!descripcion.trim()) {
            const descripcion = document.getElementById("descripcion")
            descripcion.innerHTML = "Se necesita Descripción"
            return
        }

        console.log(`Procesando datos donde nombre de fruta es ${fruta} y su descripcion es ${descripcion}`)

        setLista([
            ...lista,
            {nombreFruta: fruta, descripcionFruta: descripcion}
        ])

        e.target.reset()
        setFruta("")
        setDescripcion("")
        document.getElementById("fruta").innerHTML=""
        document.getElementById("descripcion").innerHTML=""

    }

  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={guardarDatos}>
            <input onChange={e => setFruta(e.target.value)} type="text" placeholder='Ingrese Frutas' className='form-control mb-2' />
            <p id='fruta'></p>
            <input onChange={e => setDescripcion(e.target.value)} type="text" placeholder='Ingrese Descripción' className='form-control mb-2' />
            <p id='descripcion'></p>
            <button className="btn btn-success btn-block" type='submit'>Agregar</button>
        </form>
        {/* Imprimiendo en el DOM la información agregada en el formulario, sin persistencia de datos, pero dinamico */}
        {/* recordar que para inyectar html en ReactJS se debe hacer con () como se ve en el map, que tradicionalmente lleva {} */}
        <ul>
            {
                lista.map((item, index) => (
                    <li className='mt-2' key={index}>
                        {item.nombreFruta} - {item.descripcionFruta}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Formulario