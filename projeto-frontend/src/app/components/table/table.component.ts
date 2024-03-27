import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public usuarios?: Usuario[] = [
    {
      id: "1",
      nome: "Luana",
      login: "luanaf0",
      email: "luana@gmail.com",
      senha: "102030"
    },
    {
      id: "2",
      nome: "Clara",
      login: "claraf0",
      email: "clara@gmail.com",
      senha: "54321"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
