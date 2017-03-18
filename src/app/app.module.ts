import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioDetalheComponent } from './usuario/usuario-detalhe.component';
import { UsuarioFormComponent } from './usuario/usuario-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DashboardComponent } from './usuario/dashboard.component';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';


@NgModule({
  declarations: [
    AppComponent,
	UsuarioDetalheComponent,
	UsuarioFormComponent,
	UsuarioComponent,
	DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	JsonpModule,
	UsuarioRoutingModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
