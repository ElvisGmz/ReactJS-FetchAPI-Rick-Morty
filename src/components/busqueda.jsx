import React, {useEffect, useState} from 'react'

const BarSearch = ({ id={}, setId={ }})=>{
    const [busqueda, setBusqueda] = useState("")
    const [items,setItems] = useState([])

    useEffect(()=>{
        if(busqueda.length>0){
            fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
            .then(res=> res.json())
            .then(
                result => {
                    if(result.error){
                        setItems([])
                    }else{
                        setItems(result.results)
                    }
                });
            }else{
                setItems([])
            }
    },[busqueda])
    
    const handleChange = (e)=> setBusqueda(e.target.value)

    const handleClick = (e) => {
        setId(e.target.value)
        setBusqueda('')
      }

    return(
        <>
            <input autoComplete="off" id="txtSearch" onChange={handleChange} value={busqueda} placeholder="Buscar"></input>
            <div className="resultadoBusqueda" id="cuadro">
                
                {
                      items.map((resp)=>(
                          <button key={resp.id} value={resp.id} onClick={handleClick}>
                              {resp.name}
                          </button>
                      ))
                }
            </div>
        </>
    );
}

export default BarSearch;