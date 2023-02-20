import React from "react";
import Contact from './Contact';
import Home from "./Home";
import {Routes, Route, useParams, useLocation} from 'react-router-dom';
// import pageContextProvider from './pageContext'
import Rout from "../routes";
import Navbar from "./Navbar";

function App() {

    return (
      <>
        {/* <h1> Hello </h1> */}
        <Navbar />
        <Rout />
      </>
    )
}

export default App;
