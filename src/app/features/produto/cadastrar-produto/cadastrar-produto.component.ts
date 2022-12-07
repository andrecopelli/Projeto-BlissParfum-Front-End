import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { IProduto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  public form!: FormGroup;
  public dataAtual: Date = new Date();
  
  constructor(private produtoService: ProdutoService) { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      descricao: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      volume: new FormControl(null, [Validators.required, Validators.min(1)]),
      validade: new FormControl(null, [Validators.required]),
      preco: new FormControl(null, [Validators.required, Validators.min(1)])
    })
  }

  public salvar(): void {
    if (this.form.valid) {
      const novoProduto: IProduto = {
        idProduto: 0,
        nome: this.form.value.nome,
        descricao: this.form.value.descricao,
        volume: this.form.value.volume,
        validade: this.form.value.validade,
        preco: this.form.value.preco,
        estoque: 0,
        estaAtivo: true
      }
      this.produtoService.salvarProduto(novoProduto)
      .pipe(take(1))
      .subscribe(() => {confirm('Produto Salvo')});
      this.limpar();
    }
  }

  public limpar(): void {
    this.form.reset()
  }

}
