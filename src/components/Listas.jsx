import React, {useState} from 'react'

const Listas = () => {

    const estadoInicial = [
      {id: 1, texto: "tarea 1"},
      {id: 2, texto: "tarea 2"},
      {id: 3, texto: "tarea 3"}
    ]
    // Operador de propagación, une dos arrays con ... a un nuevo array.
    // const arrayUno = ['Chile', 'Argentina']
    // const arrayDos = ['Perú', 'México']

    // const Unidos = [...arrayUno, ...arrayDos]
    // console.log(Unidos)

    const [lista, setLista] = useState(estadoInicial)

    // usando el operador de propagación para agregar dentro del array de objetos un nuevo objeto, sin eliminar la anterior lista a través del setLista
    const agregarElemento = () => {
      setLista([
        ...lista,
        {id: 4, texto: 'tarea 4'}
      ])
    }
  return (
    <div>
        {/* Al usar map siempre necesita llevar un "key" que identifique al elemento */}
        <h2>Listas</h2>
        {
            lista.map((item, index) => (
                <h4 key={index}>{item.texto}</h4>
            ))
        }
        <button onClick={() => agregarElemento()}>Agregar</button>

    </div>
  )
}

export default Listas