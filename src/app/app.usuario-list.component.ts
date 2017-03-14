@Component({
	moduleId: module.id,
	selector: 'usuario-lista',
	templateUrl: './usuario-list.component.html',
	providers: [UsuarioService]
})
export class UsuarioListComponent implements OnInit {
	usuarios: Usuario[];
	usuarioSelecionado: Usuario;
	
	constructor(private service: UsuarioService){}
	
	ngOnInit(){
		this.usuarios = this.service.getUsuarios();
	}
	
	selectUsuario(usuario: Usuario) {
		this.usuarioSelecionado = usuario;
	}
}