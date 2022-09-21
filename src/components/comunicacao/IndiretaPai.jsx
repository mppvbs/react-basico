/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'
 
export default props => {
    const [ nome, setNome] = useState('_____')
    const [ idade, setIdade] = useState(0)
    const [ nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
        
    }

    return (
        <div>
            <span>O nome do teu pai é {nome}. </span>
            <span>Ele tem {idade} anos, </span>
            <span>e ele {nerd ? 'é nerd!' : 'é burro!'}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>

    )
}
