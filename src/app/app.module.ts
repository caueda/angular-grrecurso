import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioDetalheComponent } from './usuario/usuario-detalhe.component';
import { UsuarioFormComponent } from './usuario/usuario-form.component';

@NgModule({
  declarations: [
    AppComponent,
	UsuarioDetalheComponent,
	UsuarioFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	JsonpModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
