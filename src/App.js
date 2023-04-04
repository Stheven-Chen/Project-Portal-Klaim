import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Main from "./route"


function App(){
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;

