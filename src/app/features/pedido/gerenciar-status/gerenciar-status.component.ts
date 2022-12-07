import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base'
import { ActivatedRoute, Router } from '@angular/router'
import { take } from 'rxjs'
import { IPedido } from '../pedido.model'
import { PedidoService } from '../pedido.service'

@Component({
  selector: 'app-gerenciar-status',
  templateUrl: './gerenciar-status.component.html',
  styleUrls: ['./gerenciar-status.component.css'],
})
export class GerenciarStatusComponent implements OnInit {
  public pedido: IPedido = {} as IPedido
  public id: number = 0
  public form!: FormGroup

  constructor(private pedidoService: PedidoService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      status: new FormControl(null),
    })

    this.route.params.subscribe((params) => {
      this.id = params['id']
    })

    this.pedidoService
      .obterPedidoPorId(this.id)
      .pipe(take(1))
      .subscribe((dados: IPedido) => {
        this.pedido = dados
      })
  }

  public gerenciarStatus(): void {
    const pedido: IPedido = {
      idPedido: this.pedido.idPedido,
      cliente: this.pedido.cliente,
      produto: this.pedido.produto,
      quantidade: this.pedido.quantidade,
      dataPedido: this.pedido.dataPedido,
      valorTotal: this.pedido.valorTotal,
      status: this.form.get('status')?.value,
    }
    if (this.form.get('status')?.value === 'Finalizado') {
      if (confirm(`Atenção! Se o pedido for finalizado não poderá mais ser editado. Deseja prosseguir?`)) {
        this.pedidoService
          .atualizarStatus(pedido.idPedido, pedido.status)
          .pipe(take(1))
          .subscribe(() => {});
        confirm('Status atualizado');
        this.router.navigate(['/pedidos/gerenciador-pedidos']);
      }
    }
    else{
      this.pedidoService
        .atualizarStatus(pedido.idPedido, pedido.status)
        .pipe(take(1))
        .subscribe(() => {});
      confirm('Status atualizado');
      this.router.navigate(['/pedidos/gerenciador-pedidos']);
    }
  }

  public pedidoFinalizado(): boolean {
    return this.pedido.status === 'Finalizado' ? true : false
  }
}
