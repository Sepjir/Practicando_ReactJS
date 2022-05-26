import React from 'react'

const Contador = () => {
    const [contador, setContador] = React.useState(0)

    const aumentar = () => {
        console.log("click")
        setContador(contador + 1)

    }

  return (
    <>
        <h2>Contador</h2>
        <h3>Numero aumentado: {contador} </h3>
        <h4>
            {
                //Operador ternario evaluar ? positivo : negativo
                contador > 2 ? 'Es mayor a 2' : 'Es menor a 2'
            }
        </h4>
        <button onClick={() => aumentar()}>Aumentar</button>
    </>
  )
}

export default Contador