import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ICliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  public form!: FormGroup;
  public dataAtual: Date = new Date();

  constructor(private clienteService: ClienteService) { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{11}")]),
      dataNascimento: new FormControl(null, [Validators.required])
    })
  }

  public salvar(): void {
    if (this.form.valid) {
      const novoCliente: ICliente = {
        idCliente: 0,
        nome: this.form.value.nome,
        cpf: this.form.value.cpf,
        dataDeNascimento: this.form.value.dataNascimento,
        pontosFidelidade: 0
      }
      this.clienteService.salvarCliente(novoCliente)
      .pipe(take(1))
      .subscribe(() => {confirm(`Cliente Salvo`)});
      this.limpar();      
    }
  }

  public limpar(): void {
    this.form.reset()
  }

}
