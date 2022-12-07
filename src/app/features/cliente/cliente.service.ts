import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICliente } from "./cliente.model";

@Injectable()

export class ClienteService{

    private api: string = "http://localhost:5000";
    
    constructor(private httpClient: HttpClient){

    }

    public salvarCliente(novoCliente: ICliente): Observable<boolean> {
        return this.httpClient.post<boolean>(`${this.api}/clientes`, novoCliente);
    }

    public obterClientes(): Observable<ICliente[]> {
       return this.httpClient.get<ICliente[]>(`${this.api}/clientes`);
    }
    
    public editarCliente(clienteEditado: ICliente): Observable<ICliente> {
        return this.httpClient.put<ICliente>(`${this.api}/clientes`, clienteEditado);
    }
    
    public excluirCliente(cpf:String): Observable<boolean>{
        return this.httpClient.delete<boolean>(`${this.api}/clientes/cpf?cpf=${cpf}`);
    }

    public obterClientePorId(id: number): Observable<ICliente>{
        return this.httpClient.get<ICliente>(`${this.api}/clientes/id?id=${id}`);
    }

    public obterClientePorCpf(cpf: string): Observable<ICliente>{
        return this.httpClient.get<ICliente>(`${this.api}/clientes/cpf?cpf=${cpf}`);
    }
}