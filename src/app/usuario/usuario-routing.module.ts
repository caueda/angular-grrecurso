import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './usuario-list.component';
import { UsuarioComponent } from './usuario.component';
import { UsuarioFormComponent } from './usuario-form.component';

const routes: Routes =[
	{path: '', redirectTo: '/listaTodos', pathMatch: 'full'},
	{path: 'listaTodos', component: UsuarioListComponent},
	{path: 'detalhe/:idUsuario', component: UsuarioFormComponent},
	{path: 'listaLogados', component: UsuarioComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class UsuarioRoutingModule {}