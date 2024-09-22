import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormRegisterData } from '../register/register.component';
import { HttpService, SelectData } from 'src/app/services/http.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data?: FormRegisterData;
  genders?: SelectData[];
  documentTypes?: SelectData[];

  constructor(
    private _router: Router,
    private _http: HttpService,
    private alertController: AlertController
  ) {}

  async ngOnInit() {
    await this._http.presentLoading();
    this.genders = await this._http.genders;
    this.documentTypes = await this._http.documentTypes;
    this.data = JSON.parse(localStorage.getItem('user')!);
    console.log(this.data);

    await this._http.hideLoading();

    this.presentAlert();
  }

  get gender() {
    return this.genders?.find((item) => item.id == this.data?.gender)?.name;
  }

  get documentType() {
    return this.documentTypes?.find(
      (item) => item.id == this.data?.document_type
    )?.name;
  }

  onLogOut() {
    localStorage.clear();
    this._router.navigate(['start']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: `
        <img src="assets/marrano-regalo.svg" alt="icono" />
        <h2>¡Bienvenido a Coink!</h2>
        <p>¡Cuenta creada exitosamente, tu marrano ya está listo para que empieces a ahorrar!</p>
      `,
      cssClass: 'alertWelcome',
      buttons: ['Continuar'],
    });

    await alert.present();
  }
}
