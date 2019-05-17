import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { Resultado } from 'src/app/interfaces/resultado.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  resultados: Resultado[] = [];
  resultadoShow: Resultado;
  constructor(private localService: LocalService,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.activatedRoute.params.subscribe(({id}) => {
      this.localService.obtenerDatos().then(resp => {
        this.resultados = resp;
        this.resultadoShow = this.resultados.find( result => result.id === id);
        console.log( this.resultadoShow );
      });
    }).unsubscribe();
  }
  between(x, min, max) {
    return Number(x) >= Number(min) && Number(x) <= Number(max);
  }

}
