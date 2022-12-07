import { ICliente } from "../cliente/cliente.model";
import { IProduto } from "../produto/produto.model";

export interface IPedido{
    idPedido: number;
    cliente: ICliente;
    produto: IProduto;
    quantidade: number;
    dataPedido: Date;
    valorTotal: number;
    status: string;
}