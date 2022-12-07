import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { take } from 'rxjs'
import { IProduto } from '../../produto/produto.model'
import { IPedido } from '../pedido.model'
import { PedidoService } from '../pedido.service'

@Component({
  selector: 'app-gerenciar-pedido',
  templateUrl: './gerenciar-pedido.component.html',
  styleUrls: ['./gerenciar-pedido.component.css'],
})
export class GerenciarPedidoComponent implements OnInit {
  public pedidos: IPedido[] = []
  public finalizado: boolean = false
  constructor(private pedidoService: PedidoService, private router: Router) {}

  ngOnInit(): void {
    this.pedidoService
      .obterPedidos()
      .pipe(take(1))
      .subscribe((dados: IPedido[]) => {
        this.pedidos = dados
      })
  }

  public excluir(id: number): void {
    if (confirm(`Você deseja excluir o pedido ${id}?`)) {
      this.pedidoService
        .excluirPedido(id)
        .pipe(take(1))
        .subscribe(() => {
          confirm(`O pedido foi excluído com sucesso`)
          location.reload()
        })
    }
  }

  public gerenciarStatus(id: number): void {
    this.router.navigate(['pedidos/gerenciar-status', id])
  }

  public acompanharPedido(id: number): void {
    this.router.navigate(['pedidos/acompanhar-pedido', id])
  }
}
