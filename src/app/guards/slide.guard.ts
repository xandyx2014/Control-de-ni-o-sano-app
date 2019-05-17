import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class SlideGuard implements CanLoad {
  constructor(private storage: Storage,
              private navCtrl: NavController) {}
  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    return this.storage.get('slides').then( resp => {
        if (resp === null) {
          this.navCtrl.navigateBack('/slides');
          return false;
        } else {
          return true;
        }
      });
  }
}
