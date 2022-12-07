export interface IProduto{
    idProduto: number;
    nome: String;
    descricao: String;
    volume: number;
    validade: Date;
    preco: number;
    estoque: number;
    estaAtivo: boolean;
}