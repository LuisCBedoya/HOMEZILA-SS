import { Component, OnInit } from '@angular/core';
declare var operaciones:any;

@Component({
  selector: 'app-gestionar-usuarios',
  templateUrl: './gestionar-usuarios.component.html',
  styleUrls: ['./gestionar-usuarios.component.css']
})
export class GestionarUsuariosComponent implements OnInit {

  titulo="Usuarios";
  total="";
  constructor() { }

  ngOnInit(): void {
  }
  
  Onclick(){
  this.total= operaciones();

  }
}
