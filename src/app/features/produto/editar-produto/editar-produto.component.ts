import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { IProduto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  public form!: FormGroup;
  public produto: IProduto = {} as IProduto;
  public id: number = 0;
  public dataAtual: Date = new Date();

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      descricao: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      volume: new FormControl(null, [Validators.required, Validators.min(1)]),
      validade: new FormControl(null, [Validators.required]),
      preco: new FormControl(null, [Validators.required, Validators.min(1)])
    })

    this.route.params.subscribe(params => {this.id = params['id']});

    this.produtoService.obterProdutoPorId(this.id)
    .pipe(take(1))
    .subscribe((dados: IProduto) => {
      this.produto = dados;
    });
  }

  public salvar(): void {
    if (this.form.valid) {
      const produto: IProduto = {
        idProduto: this.produto.idProduto,
        nome: this.form.get('nome')?.value,
        descricao: this.form.get('descricao')?.value,
        volume: this.form.get('volume')?.value,
        validade: this.form.get('validade')?.value,
        preco: this.form.get('preco')?.value,
        estoque: this.produto.estoque,
        estaAtivo: this.produto.estaAtivo
      }
      this.produtoService.editarProduto(produto)
      .pipe(take(1))
      .subscribe(() => {confirm('Produto Editado')});
      this.router.navigate(['/produtos/gerenciador-produtos']);
    }
  }

  public limpar(): void {
    this.form.reset()
  }

}
