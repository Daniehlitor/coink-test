import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { delay, timer } from 'rxjs';

export type SelectData = {
  id: string;
  name: string;
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private base_url = 'https://api.bancoink.biz/qa/signup';
  private api_key = '030106';

  constructor(
    private _http: HttpClient,
    private loadingController: LoadingController
  ) {}

  httpGET(path: string) {
    return new Promise<any>((resolve, reject) => {
      const completeURL = `${this.base_url}/${path}?apiKey=${this.api_key}`;
      this._http.get(completeURL).subscribe({
        next: (res) => resolve(res),
        error: (error) => {
          reject(error);
          this.hideLoading();
        },
      });
    });
  }

  get genders(): Promise<SelectData[]> {
    return this.httpGET('gender')
      .then((res) => {
        return res;
      })
      .catch(() => {
        return [
          { id: 'F', name: 'Femenino' },
          { id: 'M', name: 'Masculino' },
        ];
      });
  }

  get documentTypes(): Promise<SelectData[]> {
    return this.httpGET('documentTypes')
      .then((res) => {
        return res;
      })
      .catch(() => {
        return [
          { id: 'TI', name: 'Tarjeta de identidad' },
          { id: 'CC', name: 'Cédula de ciudadanía' },
          { id: 'CE', name: 'Cédula de extranjería' },
        ];
      });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Espera, por favor',
      spinner: 'bubbles',
    });
    await loading.present();
  }

  async hideLoading() {
    const top = await this.loadingController.getTop();
    if (top) top.dismiss();
  }

  async wait(miliseconds: number = 1000) {
    return new Promise<void>((resolve) => {
      timer(miliseconds).subscribe(() => resolve());
    });
  }
}
