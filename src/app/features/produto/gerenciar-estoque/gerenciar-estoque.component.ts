import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { IProduto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-gerenciar-estoque',
  templateUrl: './gerenciar-estoque.component.html',
  styleUrls: ['./gerenciar-estoque.component.css']
})
export class GerenciarEstoqueComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }

  public form!: FormGroup;
  public produto: IProduto = {} as IProduto;
  public id: number = 0;

  ngOnInit(): void {
    this.form = new FormGroup ({
      estoque: new FormControl(null, [Validators.required, Validators.min(1)])
    });

    this.route.params.subscribe(params => {this.id = params['id']});

    this.produtoService.obterProdutoPorId(this.id)
    .pipe(take(1))
    .subscribe((dados: IProduto) => {
      this.produto = dados;
    });
  }

  public entradaEstoque(): void {
    if (this.form.valid) {
      const produto: IProduto = {
        idProduto: this.produto.idProduto,
        nome: this.produto.nome,
        descricao: this.produto.descricao,
        volume: this.produto.volume,
        validade: this.produto.validade,
        preco: this.produto.preco,
        estoque: this.form.value.estoque,
        estaAtivo: this.produto.estaAtivo
    }
    this.produtoService.adicionarProduto(produto.idProduto, produto.estoque)
    .pipe(take(1))
    .subscribe(() => {});    
    };
    confirm('Estoque alterado');
    this.router.navigate(['/produtos/gerenciador-produtos']);
  }
}
