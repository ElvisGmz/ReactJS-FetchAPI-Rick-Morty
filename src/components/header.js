import React, {Component} from 'react';
import logo from '../assets/img/logo.png';

class HeaderComponent extends Component{
    render(){
        return(
            <>  
                <nav className="navBar">
                    <div className="logo">
                        <img src={logo} className="navImgLogo"></img>
                    </div>
                    <div className="Search">
                        <input id="txtSearch" placeholder="Buscar"></input>
                        <button id="btnSearch">
                            <i className='fas fa-search'> </i>
                        </button>
                    </div>
                </nav>
            </>
        );
    }
}

export default HeaderComponent;