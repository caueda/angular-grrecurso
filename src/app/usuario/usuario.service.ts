import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {
	
	constructor(private http: Http,
				private jsonp: Jsonp){}
	
	getUsuariosMock() {
		return   [{idUsuario:1,nome:'Administrator',email:'admin@angular.io'},
              {idUsuario:2,nome:'weblogic',email:'weblogic@oracle'}, 
			  {idUsuario:3,nome:'Oracle',email:'oracle@oracle.com'}, 
			  {idUsuario:4,nome:'wildfly',email:'wildfly@redhat.com'}];
	}
	
	getUsuarios(): Observable<Usuario[]>{		
		return this.http.get('http://localhost:8080/GRRecurso/public/api/rest/usuario')
		                .map(this.extractData)
						.catch(this.handleError);
	}
	
	
	private extractData(res: Response){
		let body = res.json();		
		return body;
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