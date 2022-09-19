import React, { useState } from 'react'
import { useEffect } from 'react'
import { generarId } from '../helpers/funciones.js'

const Formulario = ({ error, setError, registros, setRegistro, registrosEditar, setRegistroEditar }) => {

    const [genero, setGenero] = useState("")
    const [tipoDocumento, setTipoDocumento] = useState("")
    const [nIdentificacion, setnIdentificacion] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [fecha, setFecha] = useState("")
    const [nacionalidad, setNacionalidad] = useState("")

    useEffect(() => {
        setGenero(registrosEditar.genero)
        setTipoDocumento(registrosEditar.tipoDocumento)
        setnIdentificacion(registrosEditar.nIdentificacion)
        setNombre(registrosEditar.nombre)
        setApellido(registrosEditar.apellido)
        setFecha(registrosEditar.fecha)
        setNacionalidad(registrosEditar.nacionalidad)
    }, [registrosEditar])

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([genero, tipoDocumento, nIdentificacion, nombre, apellido, fecha, nacionalidad].includes('')) {
            setError(true)
            return
        }
        const objetoRegistro = {
            genero,
            tipoDocumento,
            nIdentificacion,
            nombre,
            apellido,
            fecha,
            nacionalidad
        }

        if (registrosEditar.id) {
            //El objeto toma el id del registro a editar para poder saber cual es.
            objetoRegistro.id = registrosEditar.id 
            //Funcion para tomar la informacion registrada.
            //Y que guarda la informacion con el mismo id.
            //Y si no se edita nada, pasara el valor que ya tenia.
            const registrosActualizados = registros.map( registro => registro.id == registrosEditar.id ? objetoRegistro : registro)
            setRegistro(registrosActualizados) //Guardar registro editado.
            setRegistroEditar({})//Limpiar registroEditar para no ocasionar caos en el titulo dinamico
        } else {
            //Guarda un nuevo registro.
            objetoRegistro.id = generarId()
            setRegistro([...registros, objetoRegistro])
        }

        //Limpia el formulario.
        setGenero("")
        setTipoDocumento("")
        setnIdentificacion("")
        setNombre("")
        setApellido("")
        setFecha("")
        setNacionalidad("")



    }

    return (
        <>
            <div className="container-formulario flex">
                <form id="cliente" onSubmit={handleSubmit}>
                    <div id="form-group flex">
                        <h3 className="tituloForm">{registrosEditar.id ? 'EDITAR REGISTRO' : 'GUARDAR REGISTRO'}</h3>
                    </div>
                    <div id="form-group flex">
                        <select name="Genero" id="genero" value={genero} onChange={e => setGenero(e.target.value)}>
                            <option>-Seleccione su genero</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                    </div>

                    <div id="form-group flex">
                        <select name="TipoDocumento" id="tipoDocumento" value={tipoDocumento} onChange={e => setTipoDocumento(e.target.value)}>
                            <option>-Seleccione su tipo de documento</option>
                            <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                            <option value="Cedula">Cedula</option>
                        </select>

                        <input type="number" placeholder="Ingrese su Numero de Identificacion" value={nIdentificacion} onChange={e => setnIdentificacion(e.target.value)} />
                    </div>
                    <div id="form-group">
                        <input id="nombre" type="text" placeholder="Ingrese su Nombre" autoComplete='off' value={nombre} onChange={e => setNombre(e.target.value)} />
                    </div>
                    <div id="form-group">
                        <input type="text" placeholder="Ingrese su Apellido" value={apellido} onChange={e => setApellido(e.target.value)} />
                    </div>
                    <div id="form-group">
                        <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
                    </div>
                    <div id="form-group">
                        <input type="text" placeholder="Ingrese su Nacionalidad" value={nacionalidad} onChange={e => setNacionalidad(e.target.value)} />
                    </div>

                    <div className="form-group submit flex">
                        <input className="botonGuardar" type="submit" value="GUARDAR" />
                    </div>
                </form>
            </div>

        </>
    )
}

export default Formulario