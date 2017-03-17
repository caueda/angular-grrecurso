import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
	moduleId: module.id,
	selector: 'usuario-form',
	templateUrl: './usuario-form.component.html'
})
export class UsuarioFormComponent {
	situacoes = ['Ativo', 'Inativo'];
	
	model = new Usuario(1, 'Nome', 'anonymous@email.com');
	
	submitted = false;
	
	onSubmit() {
		this.submitted = true;
	}
}