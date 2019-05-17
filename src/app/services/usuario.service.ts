import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Usuario } from '../interfaces/usuario.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario$ = new BehaviorSubject<Usuario>(null);
  constructor(private storage: Storage) { }

  guardarUsuario(usuario: Usuario) {
    this.storage.set('usuario', usuario);
  }
  obtenerUsuario(): Observable<Usuario> {
    this.storage.get('usuario').then( (resp: Usuario) => {
      this.usuario$.next(resp);
    });
    return this.usuario$.asObservable().pipe( filter( resp => resp !== null));
  }
}
