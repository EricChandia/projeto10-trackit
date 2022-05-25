import {BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TokenContext from "../contexts/TokenContext";

import Login from "./Login";
import Cadastro from "./Cadastro";
import Hoje from "./Hoje";

export default function App(){

    const [token, setToken] = useState("");
        
    return(

        <BrowserRouter>
        <TokenContext.Provider value={{token, setToken}}>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>

                <Route path="/hoje" element={<Hoje />}></Route>
            </Routes>
        </TokenContext.Provider>
        </BrowserRouter>
    );
}