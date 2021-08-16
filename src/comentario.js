import React from 'react'

const Comentario = (props) => {
    return (
        <div className="d-flex">
            <div className="d-flex align-items-center border rounded">
                <img src={props.foto} alt="foto usuário" style = {{width: 100}}></img>
            </div>
            <div className="w-100 ms-2 border rounded">
                <h4 className="m-1 border-bottom ">Comentário</h4>
                <p className="m-2">{props.comentario}</p>
            </div>
        </div>
    )
}

export default Comentario