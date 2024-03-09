import Filme from "./Filme";
import Cliente from "./Cliente";

class Locar {
    private _filmes: Filme[] = [];
    private _cliente: Cliente;

    constructor(cliente: Cliente) {
        this._cliente = cliente;
    }

    public alugarFilme(f: Filme){
        this._filmes.push(f);
    }

    public exibirAlugados(){
        this._filmes.forEach((filme) => {
            console.log(filme.titulo);
        })
    }
}

export default Locar;