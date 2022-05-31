import React, { useState }  from "react"; 
import   ReactDOM  from "react-dom";
import App from "./App"; 
import './styles/bootstrap.min.css';

function Root() {
  return (
      <React.StrictMode>
        <App/>
      </React.StrictMode>
  );
}

ReactDOM.render(<Root></Root>,document.getElementById('root'));