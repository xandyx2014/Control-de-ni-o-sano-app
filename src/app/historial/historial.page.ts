import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Resultado } from '../interfaces/resultado.interface';
import { LocalService } from '../services/local.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit, OnDestroy {
  resultados: Resultado[] = [];
  datos = new Subscription();
  @ViewChild('itemSlide') slides: any;
  constructor(private localService: LocalService,
              private router: Router) { }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.obtenerDatos();
  }
  obtenerDatos() {
    this.localService.obtenerDatos().then(resp => {
      this.resultados = resp;
    });
  }
  async doRefresh(event) {
    await this.obtenerDatos();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  ngOnDestroy() {
    this.datos.unsubscribe();
  }
  navigate(id) {
    this.slides.close();
    this.router.navigate(['/tabs/resultado', id]);
  }
  eliminar(id) {
    this.slides.close();
    this.resultados = this.resultados.filter(resp => resp.id !== id);
    this.localService.eliminarDato(id);
  }

}
