import { useState, useEffect } from 'react'
import './App.css'

import ListaRegistro from './components/ListaRegistro'
import Formulario from './components/Formulario'
import ModalError from './components/ModalError'

function App() {

  const [registros, setRegistro] = useState(JSON.parse(localStorage.getItem('registros')) ?? [])//Revisa y extrae los valores del localStorage
  const [registrosEditar, setRegistroEditar] = useState({})

  const [error, setError] = useState(false)

  useEffect(()=>{
    localStorage.setItem('registros', JSON.stringify(registros))//convierte a string por medio de Json la informacion para guardarla en el localStorage
  }, [registros])

  const eliminar = id => {
    const eliminarRegistro = registros.filter(registro => registro.id !== id)
    setRegistro(eliminarRegistro)
  }

  return (
    <main className='flex'>
      {error && ( 
        <>
          {setTimeout(() =>{
            setError(false)
          },3000)}
          <ModalError/>
        </>)
      }
      <Formulario
        error={error}
        setError={setError}
        registros={registros}
        setRegistro={setRegistro}
        registrosEditar={registrosEditar}
        setRegistroEditar={setRegistroEditar}
      />
      <ListaRegistro 
        registros={registros}
        setRegistro={setRegistro}
        eliminar={eliminar}
        setRegistroEditar={setRegistroEditar}
        registrosEditar={registrosEditar}
      />
    </main>
  )
}

export default App
