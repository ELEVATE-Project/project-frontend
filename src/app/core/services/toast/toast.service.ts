import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
    constructor(
        private toastCtrl: ToastController,
        private translate : TranslateService
      ) { }

      showToast(msg:any, color:any) {
        this.translate.get(msg).subscribe(async (translatedMessage) => {
          const toast = await this.toastCtrl.create({
            message: translatedMessage,
            color: color,
            duration: 5000,
            position: 'top',
          });
          toast.present();
        });
      }
}