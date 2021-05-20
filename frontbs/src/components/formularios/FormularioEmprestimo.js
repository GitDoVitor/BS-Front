import React from "react";
import "./FormularioEmprestimoStyle.scss";

export default function FormularioIndex() {
    return (
        <div id="container-formulario-emprestimo">
            <form>
            <input className="tres-por-linha" type="text" name="name" placeholder="Livro"/>
            <input className="tres-por-linha input-data" type="date" name="name" placeholder="Data de publicação" onFocus={(e) => (e.currentTarget.type = "date")}
  onBlur={(e) => (e.currentTarget.type = "text")}/>
            <input className="tres-por-linha input-data" type="date" name="name" placeholder="Data de publicação" onFocus={(e) => (e.currentTarget.type = "date")}
  onBlur={(e) => (e.currentTarget.type = "text")}/>
            
            <button className="botao-pesquisar-livro ">PESQUISAR LIVRO</button>

            <input className="dois-por-linha" type="text" name="name" placeholder="Nome do cliente"/>
            <input className="dois-por-linha" type="text" name="name" placeholder="Telefone"/>

            
            <input className="botao-confirmar" type="submit" value="CONFIRMAR" />
            </form>
        </div>
    );

};