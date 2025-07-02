import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'Marcos',
        email: 'marcos@google.com'})

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
         console.log('useEffect called'); 
    },[]);

     useEffect(() => {
         console.log('formstate change'); 
    },[formState]);

    useEffect(() => {
         console.log('email change'); 
    },[email]);


  return (
    <>
    <h1>Formulario Simple</h1>

    <hr />

    <input type="text"  
    className='form-control' 
    placeholder='UserName'
    name='username'
    value={username}
    onChange={onInputChange}/>

    <input type="email"
     className='form-control mt-2' 
    placeholder='marcos@marcos'
    name='email'
    value={email}
    onChange={onInputChange}/>
    </>
  )
}
