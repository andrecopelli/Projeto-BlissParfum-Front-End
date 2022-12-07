import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ICliente } from '../../cliente/cliente.model';
import { ClienteService } from '../../cliente/cliente.service';
import { IProduto } from '../../produto/produto.model';
import { ProdutoService } from '../../produto/produto.service';
import { IPedido } from '../pedido.model';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-cadastrar-pedido',
  templateUrl: './cadastrar-pedido.component.html',
  styleUrls: ['./cadastrar-pedido.component.css']
})
export class CadastrarPedidoComponent implements OnInit {

  public form!: FormGroup;
  public produtos: IProduto[] = [];
  public clientes: ICliente[] = [];
  public cliente: ICliente = {} as ICliente;
  public produto: IProduto = {} as IProduto;
  

  constructor(private pedidoService: PedidoService, private produtoService: ProdutoService, private clienteService: ClienteService, router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup ({
      cpf: new FormControl(null, [Validators.pattern("[0-9]{11}")]),
      produto: new FormControl(),
      quantidade: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(this.produto.estoque)])
    });

    this.produtoService.obterProdutosAtivos()
    .pipe(take(1))
    .subscribe((dados: IProduto[]) => {this.produtos = dados});

    this.clienteService.obterClientes()
    .pipe(take(1))
    .subscribe((dados: ICliente[]) => {this.clientes = dados});
  };

  public estoqueValidator() {
    this.produto = this.produtos.find((element: IProduto) => element.idProduto === this.form.get('produto')?.value)!;
    if (this.form.get('quantidade')?.value > this.produto.estoque) {
      return false;
    }
    return true;
  }

  public salvar(): void {
    this.produto = this.produtos.find((element: IProduto) => element.idProduto === this.form.get('produto')?.value)!;
    this.cliente = this.clientes.find((element: ICliente) => element.cpf === this.form.get('cpf')?.value)!;
    if (this.form.valid) {
      const pedido: IPedido = {
        idPedido: 0,
        cliente: this.cliente,
        produto: this.produto,
        quantidade: this.form.get('quantidade')?.value,
        dataPedido: new Date(),
        valorTotal: 0,
        status: 'Em Andamento'
      }

      this.pedidoService.salvarPedido(pedido)
        .pipe(take(1))
        .subscribe(() => {confirm('Pedido Cadastrado com Sucesso')});
    }
  }

}
