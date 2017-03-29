import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

import { statusList } from './data-model';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'usuario-detalhe',
	templateUrl: './usuario-detalhe.component.html',
    styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit{
	
	usuarioForm: FormGroup;
	statusList = statusList;	
	@Input() usuario: Usuario;
	resultado: string;
	error : any;
	
	constructor(
		private usuarioService: UsuarioService,
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private location: Location
	){
		this.createForm();
	}
	
	ngOnInit(): void {
		this.route.params
		.switchMap((params: Params) => this.usuarioService.getUsuario(+params['idUsuario']))
		.subscribe(usuario => {
									this.usuario = usuario;
									this.usuarioForm.setValue({
									nome: this.usuario.nome,
									email: this.usuario.email,
									situacao: {id: 1, desc:"Ativo"}});
							   },
		           error => this.error = <any> error);
	}
	
	ngOnChanges(){
		console.log("ngOnChanges=>", this.usuario);
		this.usuarioForm.setValue({
			nome: this.usuario.nome,
			email: this.usuario.email,
			situacao: {id: 1, desc:"Ativo"}
		});
	}
	
	createForm(){
		this.usuarioForm = this.fb.group({
			nome: ['', Validators.required],
			email: ['', Validators.required],
			situacao: '',
		});
	}
	
	update(): void {
		this.usuarioService.updateUsuario(this.usuario).subscribe(
			resultado => this.resultado = resultado,
			error => this.error = <any>error
		);
	}
	
	goBack(): void {
		this.location.back();
	}
}