/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DiretaFilho from './DiretaFilho'
 
export default props => {
    return (
        <div>
            <DiretaFilho nome="Matheus" idade={22} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Eduardo" idade={40} nerd-={false}></DiretaFilho>
        </div>

    )
}
