import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  usuarios$ = new Observable<Usuario[]>();
  usuarios: Usuario[] = [];

  constructor(public usuarioService: UsuarioService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listarUsuario().subscribe(usuarios => {
      this.usuarios = usuarios; // a lista vazia de usuários recebe os dados do backend
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  listarUsuario(): Observable<Usuario[]> {
    return this.usuarios$ = this.usuarioService.obterUsuarios();
  }

  deletarUsuario(usuario: Usuario) {
    if (usuario?.id) { // Check if id exists before using it
      this.usuarioService.excluirUsuario(usuario.id).subscribe(() => {
        console.log('Usuário excluído com sucesso!');
        this.listarUsuario().subscribe(updatedUsuarios => {
          this.usuarios = updatedUsuarios;
        });
      });
    } else {
      console.error('Tentativa de excluir usuário sem ID');
    }
  }

  editarUsuario(usuario: Usuario){
    this.openDialog()
    if(usuario?.id){
      this.usuarioService.editarUsuario(usuario.id, usuario)
    }
    // é preciso trocar a função do botão do dialog para ATUALIZAR!!
  }

}
