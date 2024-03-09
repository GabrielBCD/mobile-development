import Cliente from "./Cliente";
import Produto from "./Produto";
import Pedido from "./Pedido";

const cliente1: Cliente = new Cliente("Gabriel","Rua none");

const pedido1: Pedido = new Pedido(cliente1);

const prod1: Produto = new Produto("Notebook", 2500);
const prod2: Produto = new Produto("Mouse", 119.90);
const prod3: Produto = new Produto("Teclado", 199.90);
const prod4: Produto = new Produto("Pendrive", 59.90);

pedido1.addProduto(prod1, 1);
pedido1.addProduto(prod2, 1);
pedido1.addProduto(prod3, 1);
pedido1.addProduto(prod4, 2);

pedido1.finalizaPedido();
