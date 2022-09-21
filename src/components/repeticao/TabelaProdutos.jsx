/* eslint-disable import/no-anonymous-default-export */
import './TabelaProdutos.css'
import React from "react";
import produto from "../../data/produtos";

export default (props) => {

    const produtosLI = produto.map((produtos, i) => {
            return (
                <tr className={i % 2 === 0 ? 'Par' : 'Impar' }>
                    <td>{produtos.id}</td>
                    <td>{produtos.nome}</td>
                    <td>R$ {produtos.preco}</td>
                </tr>
            )
        });


    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosLI}
                </tbody>
            </table>
        </div>
    )
}
