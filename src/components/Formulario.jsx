import React from 'react'
import { useState }from 'react'
import useLetras from '../hooks/useLetras'

const Formulario = () => {

    const { setAlerta, busquedaLetra } = useLetras()

    const [busqueda, setBusqqueda] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Coloca el nombre del artista y cancion')
            return 
        }

        busquedaLetra(busqueda)
        setAlerta('')
    }
  return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Busca por Artitas y Canción</legend>

        <div className='form-grid'>
            <div>
                <label>Artista: </label>
                <input
                    type="text"
                    name="artista"
                    placeholder="Nombre del Artista"
                    value={busqueda.artista}
                    onChange={ e => setBusqqueda({
                        ...busqueda, 
                        [e.target.name] : e.target.value
                        })
                    }
                />
            </div>

            <div>
                <label>Canción: </label>
                <input
                    type="text"
                    name="cancion"
                    placeholder="Nombre de la Canción"
                    value={busqueda.cancion}
                    onChange={ e => setBusqqueda({
                        ...busqueda, 
                        [e.target.name] : e.target.value
                        })
                    }
                />
            </div>

            <input type="submit" value="Buscar"/>
        </div>
    </form>
  )
}

export default Formulario
