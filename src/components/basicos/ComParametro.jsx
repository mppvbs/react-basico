import React from 'react'
// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação' // ? se sim e : se não
    const notaInt = Math.ceil(props.nota) //arredondamento pra cima "números inteiros"
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p><strong>{props.aluno}</strong> tem nota { notaInt }. Portanto ele está <strong>{ status}</strong>.</p>
        </div>
    )
}
