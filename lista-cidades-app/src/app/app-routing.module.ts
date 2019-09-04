import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CidadesComponent } from './cidades/cidades.component';
import { CidadesDetalheComponent } from './cidades-detalhe/cidades-detalhe.component';
import { CidadesNovoComponent } from './cidades-novo/cidades-novo.component';
import { CidadesEditarComponent } from './cidades-editar/cidades-editar.component';


const routes: Routes = [
  {
    path: 'cidades',
    component: CidadesComponent,
    data: { title: 'Lista de cidade' }
  },
  {
    path: 'cidades-detalhe/:id',
    component: CidadesDetalheComponent,
    data: { title: 'Detalhe da cidade' }
  },
  {
    path: 'cidades-novo',
    component: CidadesNovoComponent,
    data: { title: 'Adicionar cidade' }
  },
  {
    path: 'cidades-editar/:id',
    component: CidadesEditarComponent,
    data: { title: 'Editar a cidade' }
  },
  { path: '',
    redirectTo: '/cidades',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
