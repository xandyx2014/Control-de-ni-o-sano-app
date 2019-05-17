import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Resultado } from '../interfaces/resultado.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  resultados = [];
  constructor(private storage: Storage) { }

  guardarDatos(dato) {
    return new Promise( ( resolve, reject ) => {
      this.storage.get('historial').then((resp: Resultado[]) => {
        if (resp === null) {
          this.resultados.push(dato);
          this.storage.set('historial', this.resultados);
          resolve();
        } else {
          resp.push(dato);
          this.storage.set('historial', resp);
          resolve();
        }
      });
    } );
  }
  obtenerDatos(): Promise<Resultado[]> {
    return this.storage.get('historial');
  }
  eliminarDato(id) {
    this.storage.get('historial').then((resp: Resultado[]) => {
      resp = resp.filter( item => item.id !== id);
      if (resp.length === 0) {
        resp = null;
      }
      this.storage.set('historial', resp);
    });
  }
}
