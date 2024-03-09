import User from "./usuario";
import Livro from "./livro";
import Biblioteca from "./biblioteca";

const user1 = new User(10, "Pedro");
const user2 = new User(21, "Joao");
const user3 = new User(18, "Paulo");
const user4 = new User(45, "Richard");

const livro1 = new Livro("O Pequeno Principe", "Antoine de Saint-Exupéry", 0);
const livro2 = new Livro("O Alquimista", "Paulo Coelho", 0);
const livro3 = new Livro("Dom Quixote", "Miguel de Cervantes", 0);
const livro4 = new Livro("Bem me toque, Mal me toque", "Desconhecido", 0);

const bib = new Biblioteca();

bib.adicionarLivro(livro1);
bib.adicionarLivro(livro2);
bib.adicionarLivro(livro4);

bib.adicionarUser(user1);
bib.adicionarUser(user2);
bib.adicionarUser(user4);

//OK
bib.emprestaLivro(livro1, user2);
bib.emprestaLivro(livro2, user1);
bib.emprestaLivro(livro4, user4);

//NOK
bib.emprestaLivro(livro3, user3);
