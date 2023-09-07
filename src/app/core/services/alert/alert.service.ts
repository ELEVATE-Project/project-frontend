import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async presentAlert(message: string): Promise<boolean> {
    const alert = await this.alertController.create({
      header: 'Alert',
      message,
      buttons: [
        {
          text: 'No',
          handler: () => {
            alert.dismiss(false);
            return false;
          },
        },
        {
          text: 'Yes',
          handler: () => {
            alert.dismiss(true);
            return false;
          },
        },
      ],
    });

    await alert.present();

    const result = await alert.onDidDismiss();

    return result.data as boolean;
  }
}