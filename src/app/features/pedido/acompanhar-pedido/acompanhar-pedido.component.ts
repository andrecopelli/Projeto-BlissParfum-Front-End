import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IPedido } from '../pedido.model';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-acompanhar-pedido',
  templateUrl: './acompanhar-pedido.component.html',
  styleUrls: ['./acompanhar-pedido.component.css']
})
export class AcompanharPedidoComponent implements OnInit {

  public pedido: IPedido = {} as IPedido;
  public id: number = 0;

  constructor(private pedidoService: PedidoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.id = params['id']});

    this.pedidoService.obterPedidoPorId(this.id)
    .pipe(take(1))
    .subscribe((dados: IPedido) => {
      this.pedido = dados;
    });
  }

  public emAndamento(){
    if (this.pedido.status === 'Em Andamento') {
      return 1
    }
    else{
      if (this.pedido.status === 'Em Trânsito') {
        return 2
      }
      else{
        if (this.pedido.status === 'Finalizado'){
          return 3
        }
      }
    }
    return 0;
  }

}
