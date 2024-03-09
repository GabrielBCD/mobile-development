import Produto from "./Produto";
import Cliente from "./Cliente";

class Pedido {
    private _produtos: Produto[] = [];
    private _cliente: Cliente;

    constructor(cliente: Cliente) {
        this._cliente = cliente;
    }

    get cliente(): Cliente {
        return this._cliente;
    }

    set cliente(value: Cliente) {
        this._cliente = value;
    }

    public addProduto(p: Produto, qtd: number) {
        let i: number;
        for (i = 0; i < qtd; i++) {
            this._produtos.push(p);
        }
    }

    public valorTotal() {
        let valor: number = 0.00;
        for (const produto of this._produtos) {
            valor += produto.preco;
        }
        return "R$ " + valor;
    }

    public finalizaPedido() {
        console.log(`Resumo do Pedido \nCliente: ${this._cliente.nome} \nEndereço de Entrega: ${this._cliente.endereco} \nProdutos: `);

        let printou: string[] = [];

        this._produtos.forEach((produto) => {
            let quantidade = this._produtos.filter((p) => p.nome === produto.nome).length;
            if (!printou.includes(produto.nome)) {
                console.log(
                    `${produto.nome} - Quantidade: ${quantidade} - Valor Unitário: R$ ${produto.preco} - Valor Total: R$ ${quantidade * produto.preco}`,
                );
            }
            printou.push(produto.nome)
        });

        console.log(`Total do Pedido: ${this.valorTotal()}`);
    }
}

export default Pedido;