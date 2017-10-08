import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Usuario } from './usuario';
import { BeanMessage } from './bean-message';
import { UsuarioService } from './usuario.service';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'usuario-form',
	templateUrl: './usuario-form.component.html'
})
export class UsuarioFormComponent implements OnInit, OnDestroy {
	
	@Input()
	usuario: Usuario;
	showError: boolean = false;
	showSuccess: boolean = false;
	beanMessage: BeanMessage;
	error : any;
	
	
	constructor(
		private usuarioService: UsuarioService,
		private route: ActivatedRoute,
		private location: Location
	){}
	
	ngOnInit(): void {
		
		this.route.params
		.switchMap((params: Params) => this.usuarioService.getUsuario(+params['idUsuario']))
		.subscribe(usuario => this.usuario = usuario,
		           error => this.error = <any> error);
	}
	
	ngOnDestroy(): void {

	}
	
	update(): void {
		this.usuarioService.updateUsuario(this.usuario).subscribe(
			beanMessage => {
				this.beanMessage = beanMessage; 
				if(beanMessage.codigo == 100) {
					this.showSuccess = true;
					this.showError = false;
				} else if(beanMessage.codigo < 0){
					this.showSuccess = false;
					this.showError = true;
				}					
			},
			error => this.error = <any>error
		);
	}
	
	goBack(): void {
		this.location.back();
	}
}