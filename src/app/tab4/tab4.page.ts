import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ControlService } from '../services/control.service';
import { LocalService } from '../services/local.service';
import {  format } from 'date-fns';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  myForm: FormGroup;
  semanasNacido: number;
  constructor(private fb: FormBuilder,
              private controlService: ControlService,
              private localService: LocalService,
              private router: Router,
              private toastService: ToastService) { }

  ngOnInit() {
    this.crearFormulario();
  }
  obtenerUsuario() {
    this.controlService.obtenerUsuario(this.myForm.value.estatura);
    this.controlService.devolverDatos().subscribe( resp => {
      if (resp !== null) {
        this.localService.guardarDatos({
          ...resp,
          ...this.myForm.value,
          fecha: format(Date.now(), 'DD/MM/YYYY')
        }).then(() => {
          this.router.navigate(['tabs/resultado', resp.id]);
          if (resp.pesoTamagno === undefined) {
            this.toastService.showMessage('No se ha encontrado medidas en Peso Tamaño');
          }
          this.limpiarFormulario();
        });
      }
    }).unsubscribe();
  }
  crearFormulario() {
    this.myForm = this.fb.group({
      fecha: [{value: format(Date.now(), 'DD/MM/YYYY'), disabled: true}, Validators.required],
      peso: ['', Validators.required],
      estatura: ['', Validators.required]
    });
  }
  limpiarFormulario() {
    this.myForm.patchValue({
      fecha: format(Date.now(), 'DD/MM/YYYY'),
      peso: '',
      estatura: ''
    });
  }
}
