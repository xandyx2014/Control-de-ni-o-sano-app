import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../services/toast.service';
import { format, subYears } from 'date-fns';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit, AfterViewInit {
  myForm: FormGroup;
  @ViewChild('slidesView') slidesNavegation;
  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/crecimiento.svg',
      titulo: 'Control De Cremiento',
      desc: 'Mira y calcula el crecimiento de tus hijo'
    },
    {
      img: '/assets/slides/micronutrientes.svg',
      titulo: 'Administracion De Micronutrientes',
      desc: 'Administra y consulta los micronutrientes correspondiestes'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'Calendario',
      desc: 'Consulta y verifica las fechas de tu entrega de micronutrientes'
    },
    {
      img: '/assets/slides/vacuna.svg',
      titulo: 'Vacuna',
      desc: 'Consulta las vacunas correspondientes que le toca al niño'
    }
  ];
  constructor(private navCtrl: NavController,
              private storage: Storage,
              private usuarioService: UsuarioService,
              private fb: FormBuilder,
              private toastService: ToastService) { }

  ngOnInit() {
    this.crearFormulario();
  }
  ngAfterViewInit() {
  }
  crearFormulario() {
    this.myForm = this.fb.group({
      nombre: ['', Validators.required],
      sexo: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }
  descontarFecha() {
    return format(subYears(Date.now(), 6), 'YYYY');
  }
  onClick() {
    if (this.myForm.invalid) {
      this.slidesNavegation.slidePrev();
      this.toastService.showMessage('Completa el Formulario');
    } else {
      this.navCtrl.navigateBack('/');
      this.storage.set('slides', { ok : true});
      this.usuarioService.guardarUsuario(
        {...this.myForm.value, fechaNacimiento: this.myForm.value.fechaNacimiento}
      );
    }
  }

}
