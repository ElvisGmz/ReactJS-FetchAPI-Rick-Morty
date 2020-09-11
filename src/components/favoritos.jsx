import React, {useEffect} from 'react'

const ListaFavoritos = ({fav={}}) =>{


    return(
            <>
            <ul className="listaFav">
            <h2 className="encabezado">Favoritos</h2>
                {
                    useEffect(()=>{
                        fav.map((datos)=>(
                            <li>
                                <span>{datos.name}</span>
                                <span><i className="fas fa-trash"></i></span>
                            </li>
                        ))
                    },[fav])
                }
            </ul>
        </>
        
    )
}

export default ListaFavoritos