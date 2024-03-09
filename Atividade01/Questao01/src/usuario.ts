class User{
    private _idade: number;
    private _nome: string;

    constructor(idade: number, nome: string) {
        this._idade = idade;
        this._nome = nome;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(value: number) {
        this._idade = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }
}

export default User;