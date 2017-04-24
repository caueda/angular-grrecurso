import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
	selector: 'usuario-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']	
})
export class DashboardComponent implements OnInit {
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