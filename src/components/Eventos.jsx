import React, {useState} from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('Texto desde evento')

    const eventoClick = () => {
        console.log('Me diste un click')
        setTexto('El texto se cambió')
    }
  return (
    <>
            <hr />
        <h2>
            {texto}
        </h2>
        <button onClick={ () => eventoClick() }>Click</button>
    </>
  )
}

export default Eventos