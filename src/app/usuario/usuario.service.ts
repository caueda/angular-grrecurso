import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, RequestOptions, Headers  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Usuario } from './usuario';

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
		return this.http.get(this.usuarioUrl)
		                .map(this.extractData)
						.catch(this.handleError);
	}
	
	getUsuario(idUsuario: number): Observable<Usuario>{		
		return this.http.get(`${this.usuarioUrl}/${idUsuario}`)
		                .map(this.extractData)
						.catch(this.handleError);
	}
	
	updateUsuario(usuario: Usuario): Observable<string>{
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.usuarioUrl + "/update", 
		JSON.stringify(usuario), 
		options)
		.map(this.extractData)
		.catch(this.handleError);
	}
	
	private extractData(res: Response){
		let body = res.json();	
		return body || {};
	}
	
	private handleError(error: Response | any) {
		let errMsg: string;		
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