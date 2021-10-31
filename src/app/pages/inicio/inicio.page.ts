import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[] = [
    {
      icon:"receipt-outline",
      name: "Formulario de registro",
      redirecTo: "/formulario"
    },

    {
      icon:"bag-outline",
      name: "Productos",
      redirecTo: "/productos"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
