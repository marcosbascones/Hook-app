import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const { counter1, counter2, counter3 } = state;
  return (
    <>
    <h1>Counter1: {counter1} </h1>
    <h1>Counter2: {counter2} </h1>
    <h1>Counter3: {counter3} </h1>
    <hr />
    <button  onClick={()=>setCounter({
        ...state, // Uso de spread Mantiene el resto de las propiedades del objeto state 
        counter1: counter1 + 1,
        
        //counter3
        //Es lo mismo que:
        // counter3: counter3
    })}>+1</button>
    

    </>
    

  )
}
