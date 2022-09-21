/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {
    return (
        <div>
        <span>{props.nome} tem  </span>
        <span><strong>{props.idade} </strong> anos </span>
        <span>{props.nerd ? 'e é Nerd!' : 'e não é Nerd!'}</span>
        </div>
    ) 
}
