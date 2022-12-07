import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClienteComponent } from './features/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { EditarClienteComponent } from './features/cliente/editar-cliente/editar-cliente.component';
import { GerenciadorClienteComponent } from './features/cliente/gerenciador-cliente/gerenciador-cliente.component';
import { AcompanharPedidoComponent } from './features/pedido/acompanhar-pedido/acompanhar-pedido.component';
import { CadastrarPedidoComponent } from './features/pedido/cadastrar-pedido/cadastrar-pedido.component';
import { GerenciarPedidoComponent } from './features/pedido/gerenciar-pedido/gerenciar-pedido.component';
import { GerenciarStatusComponent } from './features/pedido/gerenciar-status/gerenciar-status.component';
import { CadastrarProdutoComponent } from './features/produto/cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from './features/produto/editar-produto/editar-produto.component';
import { GerenciadorProdutoComponent } from './features/produto/gerenciador-produto/gerenciador-produto.component';
import { GerenciarEstoqueComponent } from './features/produto/gerenciar-estoque/gerenciar-estoque.component';
import { TelaInicialComponent } from './features/tela-inicial/tela-inicial.component';

const routes: Routes = [

  //ROTA INICIAL
  {
    path: '',
    component: TelaInicialComponent
  },  
  //ROTAS DO CLIENTE
  {
    path: 'clientes',
    children: [
      //GERENCIADOR DE CLIENTES
      {
        path: 'gerenciador-clientes',
        component: GerenciadorClienteComponent
      },
      //CADASTRAR CLIENTE
      {
        path: 'cadastrar-cliente',
        component: CadastrarClienteComponent
      },
      //EDITAR CLIENTE
      {
        path: 'editar-cliente/:id',
        component: EditarClienteComponent
      }
    ]
  //ROTAS DO PRODUTO
  },
  {
    path: 'produtos',
    children: [
      //GERENCIADOR DE PRODUTOS
      {
        path: 'gerenciador-produtos',
        component: GerenciadorProdutoComponent
      },
      //CADASTRAR PRODUTO
      {
        path: 'cadastrar-produto',
        component: CadastrarProdutoComponent
      },
      //EDITAR PRODUTO
      {
        path: 'editar-produto/:id',
        component: EditarProdutoComponent
      },
      //GERENCIAR ESTOQUE
      {
        path: 'gerenciar-estoque/:id',
        component: GerenciarEstoqueComponent
      }
    ]
  },
  //ROTAS DO PEDIDO
  {
    path: 'pedidos',
    children: [
      //GERENCIADOR DE PRODUTOS
      {
        path: 'gerenciador-pedidos',
        component: GerenciarPedidoComponent
      },
      //CADASTRAR PRODUTO
      {
        path: 'cadastrar-pedido',
        component: CadastrarPedidoComponent
      },
      //EDITAR PRODUTO
      {
        path: 'acompanhar-pedido/:id',
        component: AcompanharPedidoComponent
      },
      //GERENCIAR ESTOQUE
      {
        path: 'gerenciar-status/:id',
        component: GerenciarStatusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
