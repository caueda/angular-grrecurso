import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, RequestOptions, Headers  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Usuario } from './usuario';
import { BeanMessage } from './bean-message';

@Injectable()
export class UsuarioService {
	
	constructor(private http: Http,
				private jsonp: Jsonp){}
	
	private usuarioUrl = 'http://localhost:8080/GRRecurso/public/api/rest/usuario';
	
	getUsuariosMock() {
		return   [{idUsuario:1,nome:'Administrator',email:'admin@angular.io'},
              {idUsuario:2,nome:'weblogic',email:'weblogic@oracle'}, 
			  {idUsuario:3,nome:'Oracle',email:'oracle@oracle.com'}, 
			  {idUsuario:4,nome:'wildfly',email:'wildfly@redhat.com'}];
	}
	
	getUsuarios(): Observable<Usuario[]>{		
	    let url = `${this.usuarioUrl}/listall`;
		return this.http.get(url)
		                .map(this.extractData)
						.catch(this.handleError);
	}
	
	getUsuariosLogados(): Observable<Usuario[]>{
		let url = `${this.usuarioUrl}/listallLogado`;
		return this.http.get(url)
		                .map(this.extractData)
						.catch(this.handleError);
	}
	
	getUsuario(idUsuario: number): Observable<Usuario>{		
		console.log('passou por getUsuario');
		let url = `${this.usuarioUrl}/${idUsuario}`;
		return this.http.get(url)
		                .map(res => {
							let item = res.json();
							return new Usuario(item.idUsuario, item.nome, item.email);
						})
						.catch(this.handleError);
	}
	
	updateUsuario(usuario: Usuario): Observable<BeanMessage>{
		console.log("update usuário");
		let headers = new Headers();		
		headers.append('Content-Type', 'application/json');
		//headers.append('Access-Control-Allow-Origin', '*');
		let options = new RequestOptions();
		
		options.headers = headers;
		
		let url = `${this.usuarioUrl}/update`;
		return this.http.post(this.usuarioUrl + "/update", JSON.stringify(usuario), options)
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	private extractData(res: Response){
		console.log(">>>>>> response ", res);
		return res.json().map(item => {
			return new Usuario(item.idUsuario, item.nome, item.email);
		});		
	}
	
	private handleError(error: Response | any) {
		let errMsg: string;		
		console.log(error);
		if(error instanceof Response){
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}		
		return Observable.throw(errMsg);
	}
}