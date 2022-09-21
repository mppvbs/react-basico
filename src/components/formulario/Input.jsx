/* eslint-disable import/no-anonymous-default-export */
import "./input.css"
import React, { useState } from 'react'

export default props => {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    function quandoMudar(e) {
        setNome(e.target.value)
    }
    function quandoMudar2(e) {
        setSobrenome(e.target.value)
    }



    return (
        <div className="Input">
            <p>Escreva seu nome:</p>
            <input value={nome} onChange={quandoMudar} />
            <p>Agora escreva seu sobrenome:</p>
            <input value={sobrenome} onChange={quandoMudar2} />
            <p>Parabéns {nome} {sobrenome}, você não é analfabeto!</p>
            <p>Abaixo, escreva informações adicionais:</p>
            <input value={undefined} onChange={quandoMudar2} />
        </div>

    )
}
