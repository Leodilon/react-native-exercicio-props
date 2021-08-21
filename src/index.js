import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Cartao from './cartao';
import Comentario from './comentario';

const nome = {
    nome1: faker.name.findName(), 
    nome2: faker.name.findName(), 
    nome3: faker.name.findName()
}

const comentarios = {
    comentario1: faker.lorem.paragraphs(2),
    comentario2: faker.lorem.paragraphs(2),
    comentario3: faker.lorem.paragraphs(2)
}

const App = () => {
    return (
        <div className="container border border-4 border-primary rounded-3 mt-2">

            <div className="row border-bottom m-2 bg-primary bg-opacity-25">
                <h1 className="display-5 text-center">Comentários</h1>
            </div>

            {/* primeira linha de comentario */}
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 m-2">
                    <Cartao 
                    nome={nome.nome1}
                    data={faker.date.soon().toLocaleDateString()}
                    hora="10:32">
                        <Comentario 
                            foto={faker.image.avatar()}
                            comentario={comentarios.comentario1}
                        />
                    </Cartao>
                </div>
            </div>

            {/* segunda linha de comentario */}
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 m-2">
                    <Cartao 
                    nome={nome.nome2}
                    data={faker.date.soon().toLocaleDateString()}
                    hora="18:12">
                        <Comentario 
                            foto={faker.image.avatar()}
                            comentario={comentarios.comentario2}
                        />
                    </Cartao>
                </div>
            </div>

            {/* terceira linha de comentario */}
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 m-2">
                    <Cartao 
                    nome={nome.nome3}
                    data={faker.date.soon().toLocaleDateString()}
                    hora="03:48">
                        <Comentario 
                            foto={faker.image.avatar()}
                            comentario={comentarios.comentario3}
                        />
                    </Cartao>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />, document.getElementById('root')
);


