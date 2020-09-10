import React, {useEffect, useState} from 'react'
import { getCaracters } from './'


const BarSearch = () => {
    const [resultado, setResultado] = useState([]);

    useEffect(() => {
        async function loadCharacterSearch(){  
            const response = await getCaracters()
            if (response.status === 200){
                setResultado(response.data.results)
            }
        }
        loadCharacterSearch();
    }, []);

    return(
        <>

           {
        //    document.write(resultado.values)
           }
            <input id="txtSearch" placeholder="Buscar"></input>
            
            <button id="btnSearch">
                <i className='fas fa-search'> </i>
            </button>
        </>             
    )
    
}


export default BarSearch;