import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.css']
})
export class ButtonDeleteComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  // deletarUsuario(id: string){
  //   this.usuarioService.excluirUsuario(id).subscribe()
  // } // não usei a função aqui, usei direto na tabela.

}
