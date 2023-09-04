import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { duration } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading!: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) {}

  async showLoader(message: string = 'Loading...') {
    this.loading = await this.loadingController.create({
      message,
      spinner: 'circles',
      duration: 5000
    });
    await this.loading.present();
    AbortSignal
  }

  hideLoader() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }
}
