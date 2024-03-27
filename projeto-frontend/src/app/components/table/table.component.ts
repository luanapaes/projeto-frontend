import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  usuarios$ = new Observable<Usuario[]>();
  usuarios: Usuario[] = [];

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuario().subscribe(usuarios => {
      this.usuarios = usuarios; // a lista vazia de usuários recebe os dados do backend
    });
  }

  listarUsuario(): Observable<Usuario[]> {
    return this.usuarios$ = this.usuarioService.obterUsuarios();
  }

}
