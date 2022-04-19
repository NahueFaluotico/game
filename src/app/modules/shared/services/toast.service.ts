import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async showToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration
    });
    toast.present();
  }
  async showToastWithOptions(
    message: string,
    duration: number = 2000,
    icon: string = null,
    color: string = 'primary') {
    const toast = await this.toastController.create({
      message,
      duration,
      icon,
      color
    });
    toast.present();
  }
}
