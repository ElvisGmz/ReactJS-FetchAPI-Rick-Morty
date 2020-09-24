import React, { useState } from "react";
import "./assets/css/index.css";

//componentes
import HeaderComponent from "./components/header";
import ContentComponent from "./components/ContentComponent.jsx";

function App() {
  const [id, setId] = useState(1);
  return (
    <div className="App">
      <HeaderComponent id={id} setId={setId} />
      <ContentComponent id={id} setId={setId} />
    </div>
  );
}

export default App;
