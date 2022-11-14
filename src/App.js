import React from "react";
import NavBar from "./components/NavBar/NavBar";
import {orginals,Actions,comedy,romance,documentaries, horror } from './urls'
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      
      <RowPost url={orginals} title="Netflix-Orginals" />
      <RowPost url={Actions} title="Actions" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
