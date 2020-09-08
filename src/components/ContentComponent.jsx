import React, {useEffect, useState, Component} from 'react'

const ContentComponent = () => {

    const [id, setId] = useState(1);
    const [personaje, setPersonaje] = useState([]);
    
    useEffect(()=>{
        obtenerPersonajes()
    }, [id]);

    function cambiarUp(){
        setId(id + 1)
        obtenerPersonajes()
    }


        function cambiarDown(){
            setId(id - 1);
            obtenerPersonajes()
    }
    
        const obtenerPersonajes = async () => {
        
        const datos = await fetch('https://rickandmortyapi.com/api/character/' + id)
        const datosPersonaje = await datos.json()
        setPersonaje(datosPersonaje)
    }




    return(
        <>
        <div className="container">           
            <div className="card mainCard">
                </div>
        
            <div className="card selectCard">
                <img src={personaje.image}></img>
                <h1>{personaje.name}</h1>
                <div className="selectInfo">
                    <h2>Especie</h2>
                        <p>{personaje.species}</p>
                    <h2>Genero</h2>
                        <p>{personaje.gender}</p>
                    <h2>Estado</h2>
                        <p>{personaje.status}</p>
                <button onClick={cambiarDown} className="btnChangePerson left">
                    <i className='fas fa-arrow-left'></i>
                </button>
                <button onClick={cambiarUp} className="btnChangePerson right">
                    <i className='fas fa-arrow-right'></i>
                </button>
                </div>
            </div>

        </div>
                
        </>
    );
}


export default ContentComponent;