import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { ClienteService } from './features/cliente/cliente.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  private data = new Date();
  public hora: any;
  public minuto: string = '';
  public segundo: string = '';
  public dia: string = '';
  public toggleButton = document.getElementById('floating-toggle');
  
  
  constructor() {
    

  }

  ngOnInit(): void {
    setInterval(() => {
    const data = new Date();
    this.updateDate(data);
  }, 1000);
  this.dia = this.dias[this.data.getDay()];
  }

  private updateDate(data: Date): void {
    const horas = data.getHours();
    this.hora = horas < 10 ? '0' + horas : horas;
    const minutos = data.getMinutes();
    this.minuto = minutos < 10 ? '0' + minutos : minutos.toString();
    const segundos = data.getSeconds();
    this.segundo = segundos < 10 ? '0' + segundos : segundos.toString();
  }

  public toogle(){
    document.body.classList.toggle('light-theme');
  }
  
}

