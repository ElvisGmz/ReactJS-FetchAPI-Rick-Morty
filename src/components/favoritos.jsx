import React, {useEffect, useState} from 'react'

const ListaFavoritos = ({fav={}}) =>{


    return(
            <>
            <ul className="listaFav">
            <h2 className="encabezado">Favoritos</h2>
                {
                    fav.map((datos)=>(
                        <li>
                            <span>{datos.name}</span>
                            <span><i className="fas fa-trash"></i></span>
                        </li>
                    ))
                }
            </ul>
        </>
        
    )
}

export default ListaFavoritos