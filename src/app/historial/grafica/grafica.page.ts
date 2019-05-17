import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color} from 'ng2-charts';
import { LocalService } from 'src/app/services/local.service';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.page.html',
  styleUrls: ['./grafica.page.scss'],
})
export class GraficaPage implements OnInit {
  public lineChartDataEstatura: ChartDataSets[] = [];
  public lineChartDataPeso: ChartDataSets[] = [];
  public lineChartLabelsDate: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  okey = false;
  constructor(private localStorage: LocalService) {}
  ngOnInit() {}
  ionViewWillEnter() {
    this.iniciarDatos();
  }
  iniciarDatos() {
    this.localStorage.obtenerDatos().then( resp => {
      this.lineChartLabelsDate = resp.map(item => `*${item.fecha}*`);
      const estatura = resp.map(item => Number(item.estatura));
      const peso = resp.map(item => item.peso);
      this.lineChartDataEstatura = [
        { data: estatura, label: 'Series Estatura' }
      ];
      this.lineChartDataPeso = [
        { data: peso, label: 'Series Peso' }
      ];
      this.okey = true;
    });
  }
}
