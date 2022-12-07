import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { take } from 'rxjs'
import { ICliente } from '../cliente.model'
import { ClienteService } from '../cliente.service'

@Component({
  selector: 'app-gerenciador-cliente',
  templateUrl: './gerenciador-cliente.component.html',
  styleUrls: ['./gerenciador-cliente.component.css'],
})
export class GerenciadorClienteComponent implements OnInit {
  public clientes: ICliente[] = []
  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.clienteService
      .obterClientes()
      .pipe(take(1))
      .subscribe((dados: ICliente[]) => {
        this.clientes = dados
      })
  }

  public excluir(cpf: String): void {
    if (confirm(`Você deseja excluir o cliente ${cpf}?`)) {
      this.clienteService
        .excluirCliente(cpf)
        .pipe(take(1))
        .subscribe(() => {
          alert(`O cliente ${cpf} foi excluído com sucesso`)
          location.reload()
        })
    }
  }

  public editar(id: number): void {
    this.router.navigate(['clientes/editar-cliente', id])
  }
}
