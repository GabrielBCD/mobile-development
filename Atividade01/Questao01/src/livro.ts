class Livro{
    private _titulo: string;
    private _autor: string;
    private _ano: number;

    constructor(titulo: string, autor: string, ano: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._ano = ano;
    }

    get titulo(): string {
        return this._titulo;
    }

    set titulo(value: string) {
        this._titulo = value;
    }

    get autor(): string {
        return this._autor;
    }

    set autor(value: string) {
        this._autor = value;
    }

    get ano(): number {
        return this._ano;
    }

    set ano(value: number) {
        this._ano = value;
    }
}

export default Livro