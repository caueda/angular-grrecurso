import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { Observable }       from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'usuarios',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
	
  constructor(public usuarioService: UsuarioService
			 ,public router: Router){}
  
  usuarios: Usuario[];
  usuarioSelecionado: Usuario;
  qtdeUsuarios: number = 0;
  error: any;
  
  
  ngOnInit(): void {
	  this.getUsuarios();	
  }
  
  getUsuarios(): void {
	  	    this.usuarioService.getUsuariosLogados().subscribe(
					usuarios => { this.usuarios = usuarios; this.qtdeUsuarios = usuarios.length;},
					error => this.error = <any>error
				);	
			
  }
  
  onSelect(usuario: Usuario): void {
	  this.usuarioSelecionado = usuario;
  }  
  
  gotoDetalhe(): void {
	  this.router.navigate(['/detalhe', this.usuarioSelecionado.idUsuario]);
  }
}

