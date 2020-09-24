import React from "react";

const ListaFavoritos = ({ favoritos = [], setFavoritos = {} }) => {
  const eliminarFavorito = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    setFavoritos(favoritos.filter((fav) => fav.id !== id));
  };
  return (
    <>
      <ul className="listaFav">
        {favoritos.length < 1 ? (
          console.log("")
        ) : (
          <h2 className="encabezado">Favoritos</h2>
        )}
        {favoritos.map((datos) => (
          <li key={datos.id}>
            <span>{datos.name}</span>
            <span>
              <i
                className="fas fa-trash"
                data-id={datos.id}
                onClick={eliminarFavorito}
              ></i>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaFavoritos;
