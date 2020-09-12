import React from 'react'

const ListaFavoritos = ({fav={}}) =>{


    return(
            <>
            <ul className="listaFav">
            {fav.length < 1 ? console.log('') : (<h2 className="encabezado">Favoritos</h2>)}
                {
                    fav === null ? console.log('no hay fav') : fav.map((datos)=>(
                        <li key={datos.id}>
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