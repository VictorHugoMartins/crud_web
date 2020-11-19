import React from 'react';
import Modal from 'react-modal';
import './styles.css';
import '../services/api';

export default function ModalComponent( props ) {
    const { nome, setNome } = useState('');
    const { diretoria, setDiretoria } = useState('');
    const { cargo, setCargo} = useState('');
    const { imagem, setImagem} = useState('');
    
    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
        },
        content : {
            top                 : '50%',
            left                : '50%',
            right               : 'auto',
            bottom              : 'auto',
            marginRight         : '-50%',
            transform           : 'translate(-50%, -50%)',
            border              : 'none',
            borderRadius        : '0px',
        }
    };

    async function cadastrarReceita(e) {
        e.preventDefault();
        try {
            const response = await api.post('/receitas', {
                nome,
                diretoria,
                cargo,
                imagem
            })

            alert('Receita cadastrada com sucesso!')
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <div className="content-modal">
            <button 
                className="btn-default btn-x"
                onClick = {e => props.modalIsClose()}
            >
                Fechar
            </button>
            <h3>Editar Receita</h3>
            <form className="form-membro">
                <div>
                    <input type="text" id="nome" value={nome} onChange={ e => e.target.value } required/>
                    <label htmlFor="nome">Nome</label>
                </div>
                <div>
                    <input type="text" id="diretoria" value={diretoria} onChange={ e => e.target.value } required/>
                    <label htmlFor="diretoria">Diretoria</label>
                </div>
                <div>
                    <input type="text" id="cargo" value={cargo} onChange={ e => e.target.value } required/>
                    <label htmlFor="cargo">Cargo</label>
                </div>
                <div>
                    <input type="text" id="imagem" value={imagem} onChange={ e => e.target.value } required/>
                    <label htmlFor="imagem">Link imagem</label>
                </div>
                <button className="btn-default btn-add" onClick={e => cadastrarMembro(e)}>
                    <p>Confirmar</p>
                </button>
            </form>
        </div>
    </Modal>
  );
}