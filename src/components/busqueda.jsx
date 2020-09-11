import React, {Component} from 'react'


class BarSearch extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: '',
            error: null,
            isLoaded: false,
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    


    handleChange(event){
        this.setState({value: event.target.value});
        
        if (this.state.value.length < 1){
            document.querySelector('#cuadro').innerHTML = ""
        }else{
            fetch(`https://rickandmortyapi.com/api/character/?name=${this.state.value}`)
            .then(res=> res.json())
            .then(
                (result) => {
                    this.setState({isLoaded: true,
                                    items: result.results})
                },
                (error) => {
                    this.setState({isLoaded: false,
                                    error: error})
                }
            )
        }
    }

    handleClick(event) {
        alert(event.target.value)
        event.preventDefault();
        event.stopPropagation();
      }

    render(){


        // const divBusqueda = document.getElementById('cuadro').style

        // if (this.state.isLoaded === false){
        //     divBusqueda.style.visibility = 'hidden'
        // }else{
        //     divBusqueda.style.visibility = 'visible'
        // }
        
        
        return(
            <>
                <input autoComplete="off" id="txtSearch" onChange={this.handleChange} placeholder="Buscar"></input>
                <div className="resultadoBusqueda" id="cuadro">
                    
                    {
                          this.state.items.map((resp)=>(
                              <button key={resp.id} value={resp.id} onClick={this.handleClick}>
                                  {resp.name}
                              </button>
                          ))
                    }
                </div>
            </>
        );
    }
}



export default BarSearch;