import React from "react";
import "./FormularioIndexStyle.scss";

export default function FormularioIndex() {
    return (
        <div id="container-formulario">
            
            <form>
            <h1 className="titulo">Adicionar livro</h1>
            <input className="dois-por-linha" type="text" name="name" placeholder="Título"/>
            <input className="dois-por-linha" type="text" name="name" placeholder="Gênero"/>

            <input className="dois-por-linha" type="text" name="name" placeholder="Autor"/>
            <input className="dois-por-linha" type="text" name="name" placeholder="Editora"/>

            <input className="tres-por-linha" type="text" name="name" placeholder="Edição"/>
            <input className="tres-por-linha" type="text" name="name" placeholder="Número de páginas"/>
            <input className="tres-por-linha input-data" type="date" name="name" placeholder="Data de publicação" onFocus={(e) => (e.currentTarget.type = "date")}
  onBlur={(e) => (e.currentTarget.type = "text")}/>

            <textarea name="message" rows="10" cols="30" placeholder="Descrição"/>

            <input type="text" name="name" placeholder="Preço"/>

            <input className="botao-confirmar" type="submit" value="CONFIRMAR" />
            </form>
        </div>
    );

};