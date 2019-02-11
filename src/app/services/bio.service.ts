import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  constructor() { }

  getFaiq() {
    return [
      {id:0, hobby:"Berlari", ket:"lari 1 jam tiap hari"},
      {id:1, hobby:"Senam", ket:"senam tiap sore"},
      {id:2, hobby:"Bermain Musik", ket:"bermain musik saat waktu senggang"}
    ]
  }

}
