import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Cartao from './cartao';
import Comentario from './comentario';

const nome = {nome1: 'José', nome2: 'Maria', nome3: 'Pedro'}

const comentarios = {
    comentario1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta velit nec nibh maximus, eu auctor quam mollis. Duis at tortor a tortor tristique vestibulum non eu eros. Ut interdum consectetur accumsan. Nulla laoreet tincidunt eros, eget laoreet nibh lacinia ac. Praesent suscipit orci ut lacinia accumsan. Pellentesque in sollicitudin dui.',
    comentario2: 'Integer vel placerat tortor. Duis vestibulum felis neque, at maximus mi ornare id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ut tortor semper, rutrum tellus vel, efficitur neque. Cras mollis justo sagittis tincidunt ornare. Curabitur vitae justo ultrices, vestibulum ante quis, egestas justo. Etiam in ligula cursus, consectetur ex eget, porta tellus. Nam non fermentum dolor. Maecenas id pulvinar sem. Duis in sem mauris.',
    comentario3: 'Suspendisse sed lacus ac elit facilisis fermentum ut ac tortor. Vivamus a justo ut dolor feugiat faucibus. Donec ornare, purus id porta dignissim, velit nisl finibus felis, vel scelerisque justo justo vitae orci. Ut bibendum sapien nec dui sollicitudin scelerisque. Vestibulum vel sodales augue, sit amet pulvinar odio. Sed et mi id arcu fermentum posuere. Aliquam luctus, lectus a euismod ultricies, nisi nibh tempus tellus, sed pharetra sem velit in purus. Suspendisse at mattis est, at blandit ipsum. '
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
                    data="22/04/2021"
                    hora="10:32">
                        <Comentario 
                            foto="https://gravatar.com/avatar/386404cd0beabf49bed4191e8095c62b?s=400&d=robohash&r=x"
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
                    data="20/04/2021"
                    hora="18:12">
                        <Comentario 
                            foto="https://gravatar.com/avatar/19e11973fc68e865e99d6bcdbded2de0?s=400&d=robohash&r=x"
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
                    data="22/01/2021"
                    hora="03:48">
                        <Comentario 
                            foto="https://gravatar.com/avatar/92aaa9c0d051f548bf5cdd52c62ba3d7?s=400&d=robohash&r=x"
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


