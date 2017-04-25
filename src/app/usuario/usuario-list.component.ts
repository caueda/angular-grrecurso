import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
	selector: 'usuario-dashboard',
	templateUrl: './usuario-list.component.html',
	styleUrls: ['./usuario-list.component.css']	
})
export class UsuarioListComponent implements OnInit {
	usuarios: Usuario[];
	error: any;
	
	constructor(private usuarioService: UsuarioService){}
	
	ngOnInit(): void {
		
		this.usuarioService.getUsuarios().subscribe(					
					usuarios => this.usuarios = usuarios,
					error => this.error = <any>error
				);
	}
}