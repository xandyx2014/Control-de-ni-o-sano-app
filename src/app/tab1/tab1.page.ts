import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Subscription } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
  usuarioSubscription = new Subscription();
  usuario: Usuario = null;
  constructor(private usuarioService: UsuarioService,
              private router: Router) {}

  ngOnInit() {
    this.obtenerUsuario();
  }
  ngOnDestroy() {
    this.usuarioSubscription.unsubscribe();
  }
  obtenerUsuario() {
    this.usuarioSubscription = this.usuarioService.obtenerUsuario().subscribe( resp => {
        this.usuario = resp;
    });
  }
  navegacion(url: string) {
    this.router.navigate([url]);
  }
}
