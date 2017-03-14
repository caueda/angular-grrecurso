import { Component } from '@angular/core';
import { Usuario } from './app.usuario.component';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  constructor(public usuarioService: UsuarioService){}
  
  usuarios: Usuario[];
  error: any;
  
  title = 'GRRecurso';
  
  getUsuarios() {
	    this.usuarioService.getUsuarios().subscribe(
					usuarios => this.usuarios = usuarios,
					error => this.error = <any>error
				);
  }
  
  usuario: Usuario = {
		idUsuario: 1,
		nome:'Administrador',
		email:'admin@angular.io'
  };
}

