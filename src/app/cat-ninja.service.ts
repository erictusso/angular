import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatNinjaService {

  // Definimos que de manera predeterminada vamos a estar usando HttpClient y que lo 
  constructor(
    private http: HttpClient
  ) { }
  fetchUrl = "https://catfact.ninja/fact";

  getKittens () {
    return this.http.get(this.fetchUrl);
  }
}
