import "./App.css"
import React from "react";

import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className="App">
        <h1>Fundamentos React </h1>

        <div className="Cards">
            <Card titulo="#11 - Componente controlado" color="#9f9596">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação indireta" color="#ff978e">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação direta" color="#fa82ff">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Par ou Ímpar" color="#9612c5">
                <ParOuImpar numero={Math.floor(Math.random() * 10)}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Matheus' }} />
            </Card>

            <Card titulo="#07 - Tabela de produtos" color="#306b9f">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#fe5412">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#fc036c">
                <Familia sobrenome="Vilas Boas">
                    <FamiliaMembro nome="Matheus" />
                    <FamiliaMembro nome="Jean" />
                    <FamiliaMembro nome="Gina" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio aleatório" color="#2A0944">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#0806a9">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Situalçao do aluno" color="#7f7b19">
                <ComParametro titulo="Situação do aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>


            <Card titulo="#01 - Primeiro" color="#A10035">

                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>
);
