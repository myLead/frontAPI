import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Usuario } from './Usuario';
import { UsuarioService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	usuario: Usuario;
  title = 'app';

  constructor(private _usuarioService: UsuarioService) {
  	this._usuarioService.getUsuario()
            .subscribe((data: Usuario) => this.usuario = data,
            error => console.log(error));

    }


}
