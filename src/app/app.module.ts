import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteService } from './features/cliente/cliente.service';
import { GerenciadorClienteComponent } from './features/cliente/gerenciador-cliente/gerenciador-cliente.component';
import { CadastrarClienteComponent } from './features/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { EditarClienteComponent } from './features/cliente/editar-cliente/editar-cliente.component';
import { GerenciadorProdutoComponent } from './features/produto/gerenciador-produto/gerenciador-produto.component';
import { EditarProdutoComponent } from './features/produto/editar-produto/editar-produto.component';
import { GerenciarEstoqueComponent } from './features/produto/gerenciar-estoque/gerenciar-estoque.component';
import { ProdutoService } from './features/produto/produto.service';
import { CadastrarProdutoComponent } from './features/produto/cadastrar-produto/cadastrar-produto.component';
import { PedidoService } from './features/pedido/pedido.service';
import { GerenciarPedidoComponent } from './features/pedido/gerenciar-pedido/gerenciar-pedido.component';
import { CadastrarPedidoComponent } from './features/pedido/cadastrar-pedido/cadastrar-pedido.component';
import { AcompanharPedidoComponent } from './features/pedido/acompanhar-pedido/acompanhar-pedido.component';
import { GerenciarStatusComponent } from './features/pedido/gerenciar-status/gerenciar-status.component';
import { TelaInicialComponent } from './features/tela-inicial/tela-inicial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    GerenciadorClienteComponent,
    CadastrarClienteComponent,
    EditarClienteComponent,
    GerenciadorProdutoComponent,
    EditarProdutoComponent,
    GerenciarEstoqueComponent,
    CadastrarProdutoComponent,
    GerenciarPedidoComponent,
    CadastrarPedidoComponent,
    AcompanharPedidoComponent,
    GerenciarStatusComponent,
    TelaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatFormFieldModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [ClienteService, ProdutoService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
