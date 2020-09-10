import React, {useEffect, useState} from 'react'
import { getCaracters } from './'

const FiveFirst = () => {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        async function loadCharacter(){  
            const response = await getCaracters()
            if (response.status === 200){
                setCharacter(response.data.results)
            }
        }
        loadCharacter();
    }, []);

    return(
        <>

           {character.slice(0,5).map((dato)=>(
               <div key={dato.id} className="cards">
                   <img className="fiveImg" alt="" src={dato.image}></img>
                    <h2>{dato.name}</h2>
                    <p>Nombre</p>
                    <h2>{dato.species}</h2>
                    <p>Especie</p>
               </div>
           ))}

        </>
    )
    
}


export default FiveFirst;