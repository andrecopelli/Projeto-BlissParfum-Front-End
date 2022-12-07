import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IProduto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-gerenciador-produto',
  templateUrl: './gerenciador-produto.component.html',
  styleUrls: ['./gerenciador-produto.component.css']
})
export class GerenciadorProdutoComponent implements OnInit {

  public produtos : IProduto[] = [];
  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.produtoService.obterProdutos()
    .pipe(take(1))
    .subscribe((dados: IProduto[]) => {
      this.produtos = dados;
    });
  };

  public editar(id: number): void {
    this.router.navigate(['produtos/editar-produto', id]);
  };

  public gerenciarEstoque(id: number): void {
    this.router.navigate(['produtos/gerenciar-estoque', id]);
  };

  public ativar(id: number): void {
    if (confirm(`Deseja ativar o produto?`)){
      this.produtoService.ativarProduto(id)
      .pipe(take(1))
      .subscribe(() => {
        confirm('Produto Ativado')
        location.reload();
      });
    };
  };
  
  public desativar(id: number): void {
    if (confirm(`Deseja desativar o produto?`)){
      this.produtoService.desativarProduto(id)
    .pipe(take(1))
    .subscribe(() => {
        confirm('Produto Desativado')
        location.reload();
      });
    };
  };         
};
