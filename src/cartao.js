import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css'


const Cartao = (props) => {

    const bgLike = "btn btn-primary me-2 opacity-75"
    const bgUnlike = "btn btn-danger me-2 opacity-75"

    const [aprovado, setAprovado] = useState(false)
    const [reprovado, setReprovado] = useState(false)

    const comentarioAprovado = () => {
        setAprovado(true)
        setReprovado(false)
    }

    const comentarioReprovado = () => {
        setAprovado(false)
        setReprovado(true)
    }

    return (
        <div className="card">
            <div className="d-flex justify-content-between card-header text-muted">
                <div>
                    <p>Nome: {props.nome}</p>
                </div>
                <div>
                    <p>Postagem: {props.data} as {props.hora}</p>
                </div>
            </div>
            <div className="card-body">
                {props.children}
            </div>
            <div className="d-flex justify-content-between mb-2">
                <div className="ms-5">
                    {aprovado ? <p className="alert alert-primary">Comentario Aprovado</p> : ""}
                    {reprovado ? <p className="alert alert-danger">Comentario Reprovado</p> : ""}
                </div>
                <div className="justify-content-end">
                    <button className={bgLike} onClick = {comentarioAprovado}>
                        <i class="fas fa-thumbs-up"></i>
                    </button>
                    <button className={bgUnlike} onClick = {comentarioReprovado}>
                        <i class="fas fa-thumbs-down"></i>
                    </button>
                </div>    
            </div>
        </div>
    )
}

export default Cartao
