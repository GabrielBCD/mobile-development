import Livro from "./livro";
import User from "./usuario";

class Biblioteca {
    acervos: Livro[] = [];
    users: User[] = [];

    public adicionarLivro(l: Livro): void {
        this.acervos.push(l);
    }

    public adicionarUser(u: User): void {
        this.users.push(u);
    }

    public emprestaLivro(l: Livro, u: User) {
        if (this.acervos.includes(l) || (this.users.includes(u))){
            console.log("Livro %s emprestado com sucesso ao usuário %s", l.titulo, u.nome)
        } else  {
            console.error("Livro ou Usuário inexistente")
        }
    }
}

export default Biblioteca;