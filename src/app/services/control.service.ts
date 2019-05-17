import {
  Injectable
} from '@angular/core';
import {
  UsuarioService
} from './usuario.service';
import {
  differenceInCalendarMonths
} from 'date-fns';
import * as controlHombre from '../db/hombre/hombre';
import * as controlMujer from '../db/mujer/mujer';
import { Resultado } from '../interfaces/resultado.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ControlService {
  private mesesNacido: number;
  private estaturaLongitud: number;
  private resultado = new BehaviorSubject<Resultado>(null);
  constructor(private usuarioService: UsuarioService) {}
  obtenerUsuario(medida) {
    this.usuarioService.obtenerUsuario().subscribe(resp => {
      this.mesesNacido = differenceInCalendarMonths(Date.now(), resp.fechaNacimiento);
      this.estaturaLongitud = medida;
      if (resp.sexo === 'hombre') {
        this.obtenerDatos(controlHombre);
      } else {
        this.obtenerDatos(controlMujer);
      }
    });

  }
  private obtenerDatos(control) {
    const pesoEdad = control.pesoEdad.find(resp => Number(resp.Meses) === this.mesesNacido);
    if (this.mesesNacido <= 24) {
      const longitudEdad = control.longEdad.find(resp => Number(resp.Meses) === this.mesesNacido);
      const pesoLongitud = control.pesoLongitud.find((resp) => {
          if (Number(Math.abs(Number(resp.cm) - this.estaturaLongitud).toFixed(2)) >= 0
          && Number(Math.abs(Number(resp.cm) - this.estaturaLongitud).toFixed(2)) <= 0.3
          ) {
            return resp;
          }
      });
      this.resultado.next({
        id: `${ Date.now().toString()}${new Date().getSeconds()}${new Date().getMilliseconds()}`,
        pesoEdad,
        mesesNacido: this.mesesNacido,
        tamagnoEdad: longitudEdad,
        pesoTamagno: pesoLongitud,
        tipo: 'menor'
      });
    } else {
      const tallaEdad = control.tallaEdad.find(resp => Number(resp.Meses) === this.mesesNacido);
      const pesoTalla = control.pesoTalla.find((resp) => {
        if (Number(Math.abs(Number(resp.cm) - this.estaturaLongitud).toFixed(2)) >= 0
          && Number(Math.abs(Number(resp.cm) - this.estaturaLongitud).toFixed(2)) <= 0.3
          ) {
            return resp;
          }
      });
      this.resultado.next({
          id: `${ Date.now().toString()}${new Date().getSeconds()}${new Date().getMilliseconds()}`,
          pesoEdad,
          mesesNacido: this.mesesNacido,
          tamagnoEdad: tallaEdad,
          pesoTamagno: pesoTalla,
          tipo: 'mayor'
        });
    }
  }
  devolverDatos(): Observable<Resultado> {
    return this.resultado.asObservable();
  }
}
