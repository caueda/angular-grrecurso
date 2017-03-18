import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsuarioComponent } from './usuario.component';
import { UsuarioDetalheComponent } from './usuario-detalhe.component';

const routes: Routes =[
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'detalhe/:idUsuario', component: UsuarioDetalheComponent},
	{path: 'usuarios', component: UsuarioComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class UsuarioRoutingModule {}