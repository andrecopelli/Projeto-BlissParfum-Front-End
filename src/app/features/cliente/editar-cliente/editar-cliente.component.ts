import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ICliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  public cliente: ICliente = {} as ICliente;
  public id: number = 0;
  public form!: FormGroup;
  public dataAtual: Date = new Date();

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(11), Validators.pattern("[0-9]{11}")]),
      dataDeNascimento: new FormControl(null, [Validators.required])
    });

    this.route.params.subscribe(params => {this.id = params['id']});

    this.clienteService.obterClientePorId(this.id)
    .pipe(take(1)).subscribe((dados: ICliente)=>{
      this.cliente = dados;
    })
  }

  public salvar(): void {
    if (this.form.valid) {
      const cliente: ICliente = {
        idCliente: this.cliente.idCliente,
        nome: this.form.get('nome')?.value,
        cpf: this.form.get('cpf')?.value,
        dataDeNascimento: this.form.get('dataDeNascimento')?.value,
        pontosFidelidade: this.cliente.pontosFidelidade
      }
      this.clienteService.editarCliente(cliente)
      .pipe(take(1))
      .subscribe(() => {confirm(`Cliente Editado`)});
      this.router.navigate(['/clientes/gerenciador-clientes']);      
    }
  }

  public limpar(): void {
    this.form.reset()
  }

}
