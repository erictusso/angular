import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {
  tarjetas = [
    {
      imagen: "assets/images/paris.jpg",
      categoria: "vuelo",
      titulo: "Viaja a Paris",
      ofertaInfalible: true,
      precio: 654299,
    },
    {
      imagen: "assets/images/roma.jpg",
      categoria: "vuelo",
      titulo: "Viaja a Roma",
      ofertaInfalible: true,
      precio: 654299,
    },
    {
      imagen: "assets/images/barcelona.jpg",
      categoria: "vuelo",
      titulo: "Conoce  Barcelona",
      ofertaInfalible: true,
      precio: 654299,
    },
    {
      imagen: "assets/images/torino.jpg",
      categoria: "vuelo",
      titulo: "Conoce a Torino",
      ofertaInfalible: true,
      precio: 654299,
    },
    
  ];
  

  // imagen = "assets/images/sami.jpg";
  // categoria = "vuelo";
  // titulo = "Viaja a Paris"
  // ofertaInfalible = true
  // precio = 654299;

  constructor() { }

  ngOnInit(): void {
  }

}
