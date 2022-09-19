import React from 'react'

const Registro = ({ registro, eliminar,  registrosEditar, setRegistroEditar }) => {

    const {id, genero, tipoDocumento, nIdentificacion, nombre, apellido, fecha, nacionalidad} = registro
    const handleEliminar=(e)=>{
        const confir = confirm('Desea eliminar este Registro?')
        if (confir) {
            eliminar(id)
        }else{
            return;
        }
    }

    const handleEditar=()=>{
        const confiri = confirm('Desea editar este Registro?')
        if (confiri) {
            setRegistroEditar(registro)
        }
    }

    return (
        <>
            <div class="info-clientes">
                <p>Tipo de Documento: {tipoDocumento}</p>
                <p>Numero de Identificacion: {nIdentificacion}</p>
                <p>Nombres: {nombre} </p>
                <p>Apellidos: {apellido}</p>
                <p>Nacionalidad: {nacionalidad}</p>
                    <div class="div-botones">
                        <a class="boton" id="editar" onClick={handleEditar}>Editar</a>
                        <a class="boton" id="eliminar" onClick={handleEliminar}>Eliminar</a>
                    </div>
            </div>
        </>
    )
}

export default Registro