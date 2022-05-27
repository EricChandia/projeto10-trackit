import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Habitos from "./Habitos";
import Hoje from "./Hoje";
import Historico from "./Historico";

import TokenContext from "../contexts/TokenContext";


export default function Footer(){

    const navigate = useNavigate();

    return(
        <FooterLayout>
            <HabitosButton onClick={() => navigate("/habitos")}>Hábitos</HabitosButton>
            <PorcentagemHoje>50%</PorcentagemHoje>
            <HistoricoButton onClick={()=> navigate("/historico")}>Histórico</HistoricoButton>
        </FooterLayout>
    );

}

const HistoricoButton = styled.div`
    margin-right: 5%;
`

const HabitosButton = styled.div`
    margin-left: 5%;
`

const PorcentagemHoje = styled.div`
    width: 25%;
    height: 140%;
    margin-bottom: 15%;
    background-color: #52B6FF;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
`

const FooterLayout = styled.div`
    width: 100%;
    height: 10%;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: white;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
`
