import Cliente from "./Cliente";
import Filme from "./Filme";
import Locar from "./Locar";

const cliente1 : Cliente = new Cliente("Gabriel", 21);
const filme1 : Filme = new Filme("Invocação do Mal", "Terror", 120);
const filme2 : Filme = new Filme("Harry Poter", "Fantasia", 120);
const alugar: Locar = new Locar(cliente1);

alugar.alugarFilme(filme1);
alugar.alugarFilme(filme2);

alugar.exibirAlugados();