import React from "react";
import "./TabelaEmprestimosStyle.scss";

export default function TabelaEmprestimos() {
    return (
        <div id="container-tabela">
            <table className="tabela">
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Data Inicial</th>
                    <th>Data Final</th>
                </tr>
                <tr>
                    <td>Livro 1</td>
                    <td>50,00</td>
                    <td>01/05/2021</td>
                    <td>10/05/2021</td>
                </tr>
                <tr>
                    <td>Livro 2</td>
                    <td>20,00</td>
                    <td>11/05/2021</td>
                    <td>20/05/2021</td>
                </tr>
                <tr>
                    <td>Livro 3</td>
                    <td>30,00</td>
                    <td>01/05/2021</td>
                    <td>10/05/2021</td>
                </tr>
            </table>
        </div>
    );

};