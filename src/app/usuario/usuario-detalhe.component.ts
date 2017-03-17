import { Component, Input } from '@angular/core';
import { Usuario } from './usuario';

@Component({
	selector: 'usuario-detalhe',
	templateUrl: './usuario-detalhe.component.html',
    styleUrls: ['../app.component.css']
})
export class UsuarioDetalheComponent {
	
	@Input()
	usuario: Usuario;

}