import { Routes, Route } from "react-router-dom";
import React from 'react'

import Home from "../page/Home";
import Pesquisar from "../page/Pesquisar";


// import NavBar from "../components/NavBar";
// import SearchPlayerByNameValue from "../components/SearchPlayerByNameValue";

const PathRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pesquisar-jogador" element={<Pesquisar/>}/>
        </Routes>

    )
}

export default PathRoutes