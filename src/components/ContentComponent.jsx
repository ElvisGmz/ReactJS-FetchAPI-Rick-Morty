import React, {useEffect, useState} from 'react'
import  FiveFirst from './FiveFirst.jsx'

const ContentComponent = () => {

    const [id, setId] = useState(1);
    const [personaje, setPersonaje] = useState([]);
    
    useEffect(()=>{
        obtenerPersonajes(id)
    }, [id]);

    function cambiarUp(){
        setId(id + 1)
        obtenerPersonajes(id)
    }


        function cambiarDown(){
            if(id > 1){
                setId(id - 1);
                obtenerPersonajes(id)
            }else{
                obtenerPersonajes(id)
            }
    }
    
        const obtenerPersonajes = async (id) => {
            const datos = await fetch('https://rickandmortyapi.com/api/character/' + id)
            const datosPersonaje = await datos.json()
            setPersonaje(datosPersonaje)
        }




    return(
        <>
        <div className="container">           
            <div className="card selectCard">
                <img src={personaje.image} alt=""></img>
                <h1>{personaje.name}</h1>
                <div className="selectInfo">
                    <h2>{personaje.species}</h2>
                        <p>Especie</p>
                    <h2>{personaje.gender}</h2>
                        <p>Genero</p>
                    <h2>{personaje.status}</h2>
                        <p>Estado</p>
                <button onClick={cambiarDown} className="btnChangePerson left">
                    <i className='fas fa-arrow-left'></i>
                </button>
                <button onClick={cambiarUp} className="btnChangePerson right">
                    <i className='fas fa-arrow-right'></i>
                </button>
                </div>
                    <i className='far like fa-thumbs-up'></i>
            </div>

            
            <div className="card mainCard">
                <h2 className="encabezado">Personajes Principales</h2>
                <FiveFirst/>
            </div>

        </div>
                
        </>
    );
}


export default ContentComponent;