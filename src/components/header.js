import React, {Component} from 'react';
import BarSearch from './busqueda';
import logo from '../assets/img/logo.png';

class HeaderComponent extends Component{
    render(){
        return(
            <>  
                <nav className="navBar">
                    <div className="logo">
                        <img src={logo} className="navImgLogo"alt=""></img>
                    </div>
                    <div className="Search">
                        <BarSearch/>
                    </div>
                </nav>
            </>
        );
    }
}

export default HeaderComponent;