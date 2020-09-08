import React from 'react';
import './assets/css/index.css';

//componentes
import HeaderComponent from './components/header'
import ContentComponent from './components/ContentComponent.jsx'

function App() {

  return (
    <div className="App">
      <HeaderComponent/>
      <ContentComponent/>
      
    </div>
  );
}

export default App;
