import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    login: '',
    email: '',
    senha: ''
  }

  constructor(
    public usuarioService: UsuarioService,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    private http: HttpClient) { }

  ngOnInit() {
    import('../../service/usuario.service').then(m => m.UsuarioService); // Carregue o módulo
  }

  cadastrarUsuario(usuario: Usuario) {
    this.usuarioService.cadastrarUsuario(usuario).subscribe(() => {
      console.log('Cadastro realizado com sucesso!');
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }
}




