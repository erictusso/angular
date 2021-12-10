import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gatitos';
  // Le envio esta data al HTML 
  // pARA MOSTRARLA EN EL html USO {{ NOMBREdATO}}
  edad = 99;
  numeros = [45, 456, 57, 7879, 9];
}
