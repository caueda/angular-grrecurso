import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario/usuario';
import { UsuarioService } from './usuario/usuario.service';
import { Observable }       from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	
  constructor(public usuarioService: UsuarioService){}
  
  usuarios: Usuario[];
  usuarioSelecionado: Usuario;
  
  error: any;
  
  title = 'GRRecurso';
  
  ngOnInit(): void {
	  this.getUsuarios();
  }
  
  getUsuarios(): void {
	  	    this.usuarioService.getUsuarios().subscribe(
					usuarios => this.usuarios = usuarios,
					error => this.error = <any>error
				);
  }
  
  onSelect(usuario: Usuario): void {
	  this.usuarioSelecionado = usuario;
  }  
}

