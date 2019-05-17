import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { Resultado } from '../interfaces/resultado.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(public toastController: ToastController) {}

  async showMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
}
