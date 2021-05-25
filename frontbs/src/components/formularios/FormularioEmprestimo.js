import React, {Component} from "react";
import Modal from '../modais/Modal.js';
import "./FormularioEmprestimoStyle.scss";

export default class FormularioIndex extends Component {
    
    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

      hideModal2 = () => {
        window.onclick({ show: false});
      }
        
    render() {
        return (
          <div id="container-formulario-emprestimo">
            <form>
            <input className="tres-por-linha" type="text" name="name" placeholder="Livro"/>
            <input className="tres-por-linha input-data" type="date" name="name" placeholder="Data Inicial" onFocus={(e) => (e.currentTarget.type = "date")}
  onBlur={(e) => (e.currentTarget.type = "text")}/>
            <input className="tres-por-linha input-data" type="date" name="name" placeholder="Data Final" onFocus={(e) => (e.currentTarget.type = "date")}
  onBlur={(e) => (e.currentTarget.type = "text")}/>

            <Modal show={this.state.show} handleClose={this.hideModal}>
                <div className="modal-verificar">
                <h2>Verificar disponibilidade</h2>
                    <form>
                        <input className="um-por-linha" type="text" name="name" placeholder="Livro"/>
                        <input className="dois-por-linha-modal date-esquerda  input-data" type="date" name="name" placeholder="Data Inicial" onFocus={(e) => (e.currentTarget.type = "date")}
    onBlur={(e) => (e.currentTarget.type = "text")}/>
                        <input className="dois-por-linha-modal input-data" type="date" name="name" placeholder="Data Final" onFocus={(e) => (e.currentTarget.type = "date")}
    onBlur={(e) => (e.currentTarget.type = "text")}/>
                    </form>
                    <div id="container-tabela-modal">
                        <table className="tabela">
                            <tr>
                                <th>Título</th>
                                <th>Quantidade</th>
                            </tr>
                            <tr>
                                <td>Livro 1</td>
                                <td>5</td>                               
                            </tr>
                            <tr>
                                <td>Livro 2</td>
                                <td>2</td>                                
                            </tr>
                            <tr>
                                <td>Livro 3</td>
                                <td>3</td>
                            </tr>
                        </table>
                    </div>
                    <input className="botao-confirmar-modal" type="submit" value="CONFIRMAR" />
                </div>
            </Modal>

            <button className="botao-pesquisar-livro" type="button" onClick={this.showModal}>PESQUISAR LIVRO</button>
            

            <input className="dois-por-linha" type="text" name="name" placeholder="Nome do cliente"/>
            <input className="dois-por-linha" type="text" name="name" placeholder="Telefone"/>

            
            <input className="botao-confirmar" type="submit" value="CONFIRMAR" />
            </form>
          </div>
        );
    }
}