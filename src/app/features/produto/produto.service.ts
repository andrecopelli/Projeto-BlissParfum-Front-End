import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduto } from "./produto.model";

@Injectable()

export class ProdutoService{

    private api: string = "http://localhost:5000";

    constructor(private httpClient: HttpClient) {

    }

    public salvarProduto(novoProduto: IProduto): Observable<boolean> {
       return this.httpClient.post<boolean>(`${this.api}/produtos`, novoProduto);
    }

    public obterProdutos(): Observable<IProduto[]> {
        return this.httpClient.get<IProduto[]>(`${this.api}/produtos`);
    }

    public obterProdutosAtivos(): Observable<IProduto[]> {
        return this.httpClient.get<IProduto[]>(`${this.api}/produtos/ativos`);
    }    
    
    public editarProduto(produtoEditado: IProduto): Observable<IProduto> {
        return this.httpClient.put<IProduto>(`${this.api}/produtos`, produtoEditado);
    }

    public obterProdutoPorId(id: number): Observable<IProduto> {
        return this.httpClient.get<IProduto>(`${this.api}/produtos/idproduto?idProduto=${id}`);
    }
    
    public ativarProduto(id: number): Observable<IProduto> {
        return this.httpClient.patch<IProduto>(`${this.api}/idproduto/ativar?idProduto=${id}`, id);
    }

    public desativarProduto(id: number): Observable<IProduto> {
        return this.httpClient.patch<IProduto>(`${this.api}/idproduto/desativar?idProduto=${id}`, id);
    }

    public adicionarProduto(idProduto: number, quantidade: number): Observable<IProduto> {
        return this.httpClient.patch<IProduto>(`${this.api}/produtos/idproduto/entrada-estoque?idProduto=${idProduto}&quantidade=${quantidade}`, idProduto)
    }

    public subtrairProduto(idProduto: number, quantidade: number): Observable<IProduto> {
        return this.httpClient.patch<IProduto>(`${this.api}/produtos/idproduto/saida-estoque?idProduto=${idProduto}&quantidade=${quantidade}`, idProduto)
    }
}