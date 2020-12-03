import React from 'react'

export default props => {

    const rows = props.processos.map( processo => {
        return (
            <tr key={processo.id}>
                <td>{processo.numeroProcesso}</td>
                <td>{processo.statusProcesso}</td>
                <td>
                    <button className="btn btn-success" title="Efetivar"
                            disabled={ processo.statusProcesso !== 'PENDENTE' && processo.statusProcesso !== 'CANCELADO' 
                            && processo.statusProcesso !== 'EXCLUIDO' && processo.statusProcesso !== 'INATIVO'}
                            onClick={e => props.alterarProcesso(processo, processo.statusProcesso = 'EFETIVADO')} 
                            type="button">
                            <i className="pi pi-check-square"></i>
                    </button>
                    <button type="button"   title="Editar"
                            className="btn btn-primary"
                            onClick={e => props.editarProcesso(processo.id)}>
                            <i className="pi pi-pencil"></i>
                    </button>
                    <button className="btn btn-warning"  title="Cancelar"
                            disabled={ processo.statusProcesso !== 'EFETIVADO' && processo.statusProcesso !== 'PENDENTE'
                            && processo.statusProcesso !== 'ATIVO' && processo.statusProcesso !== 'ALTERADO'}
                            onClick={e => props.alterarProcesso(processo, processo.statusProcesso = 'CANCELADO')} 
                            type="button">
                            <i className="pi pi-times"></i>
                    </button>
                    <button type="button"  title="Excluir"
                            className="btn btn-danger" 
                            disabled={ processo.statusProcesso !== 'EFETIVADO' && processo.statusProcesso !== 'PENDENTE'
                            && processo.statusProcesso !== 'ATIVO' && processo.statusProcesso !== 'ALTERADO'}
                            onClick={ e => props.excluirProcesso(processo, processo.statusProcesso = 'EXCLUIDO')}>
                            <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    } )

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Número Processo'</th>
                    <th scope="col">Status Processo'</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

