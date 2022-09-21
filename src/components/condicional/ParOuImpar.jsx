/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {

    const isPar = props.numero % 2 === 0
    return (
        <div>
            {isPar ? <span>O número aleatório é par.</span> : <span>O número aleatório é ímpar.</span>}
        </div>
    )
}
