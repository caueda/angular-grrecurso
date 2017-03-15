import { Component } from '@angular/core';

export class Usuario {  
	constructor(
		public idUsuario: number,
		public nome: string,
		public email: string){}
}