import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPedido } from "./pedido.model";

@Injectable()

export class PedidoService{

    private api: string = "http://localhost:5000";

    constructor(private httpClient: HttpClient) {}

    public salvarPedido(novoPedido: IPedido): Observable<boolean> {
        return this.httpClient.post<boolean>(`${this.api}/pedidos`, novoPedido);
    }

    public obterPedidos(): Observable<IPedido[]> {
        return this.httpClient.get<IPedido[]>(`${this.api}/pedidos`);
    }
    
    public excluirPedido(id: number): Observable<boolean> {
        return this.httpClient.delete<boolean>(`${this.api}/pedidos?idPedido=${id}`);
    }

    public atualizarStatus(id: number, status: String): Observable<IPedido> { 
        return this.httpClient.patch<IPedido>(`${this.api}/pedidos?idPedido=${id}&status=${status}`, id);
    }

    public obterPedidoPorId(id: number): Observable<IPedido>{
        return this.httpClient.get<IPedido>(`${this.api}/pedidos/idpedido?idPedido=${id}`);
    }
}