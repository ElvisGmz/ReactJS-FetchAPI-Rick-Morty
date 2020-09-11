import React from 'react';
import BarSearch from './busqueda';
import logo from '../assets/img/logo.png';

const HeaderComponent = ({ id={}, setId={}})=>{

    return(
        <>  
                <nav className="navBar">
                    <div className="logo">
                        <img src={logo} className="navImgLogo"alt=""></img>
                    </div>
                    <div className="Search">
                        <BarSearch id={id} setId={setId}/>
                    </div>
                </nav>
            </>
        );
    }
    


export default HeaderComponent;