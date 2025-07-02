import React, { useEffect } from 'react'
import { use } from 'react'

export const Message = () => {

    useEffect(() => {
      //console.log('Message mounted');
      window.addEventListener('mousemove', ( event ) => { console.log(event.x, event.y)
        })
      //console.log('Message mounted'); 

      return () => {
        //console.log('Message unmounted');
      }
    }, []);  
    
  return (
    <>
    <h3>Usuario ya existe</h3>
    </>
  )
}
