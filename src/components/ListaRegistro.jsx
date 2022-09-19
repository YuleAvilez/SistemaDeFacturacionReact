import React from 'react'
import Registro from './Registro'

const ListaRegistro = ({ registros, eliminar, registrosEditar, setRegistroEditar }) => {
  return (
    <div className="container-registro flex">
        <h2 className="tituloLista">{registros.length == 0 ?  "No hay Clientes Registrados": "Clientes Registrados"}</h2>
        <div className="info-lista">
        {registros.map(registro => (
          <Registro
            // setRegistroEditar={setRegistroEditar}
            key={registro.id}
            registro={registro}
            eliminar={eliminar}
            setRegistroEditar={setRegistroEditar}
            registrosEditar={registrosEditar}
          />
        ))}
        </div>
      </div>
  )
}

export default ListaRegistro