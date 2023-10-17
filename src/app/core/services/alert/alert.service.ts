import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController,
    private translate: TranslateService) {}

  async presentAlert(message: string): Promise<boolean> {
    const alert = await this.alertController.create({
      header: this.translate.instant('ALERT_HEADER'),
      message: this.translate.instant(message),
      buttons: [
        {
          text: this.translate.instant('ALERT_NO'),
          handler: () => {
            alert.dismiss(false);
            return false;
          },
        },
        {
          text: this.translate.instant('ALERT_YES'),
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