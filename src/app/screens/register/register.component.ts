import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

export type FormRegisterData = {
  birthday?: Date;
  document_date?: Date;
  document_number?: string;
  document_type?: string;
  email?: string;
  gender?: string;
  password?: number;
  phone?: number;
  pin?: number;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('slides') slides_el!: ElementRef;
  form_data: FormRegisterData = {};

  constructor(private _router: Router) {}

  ngOnInit() {
    console.log();
  }

  get title() {
    switch (this.slides?.activeIndex) {
      case 0:
        return 'Número celular';
      case 1:
        return 'Datos de cuenta';
      case 2:
        return 'Finalizar';
      default:
        return 'Titulo';
    }
  }

  get slides(): Swiper | undefined {
    return this.slides_el?.nativeElement?.swiper as Swiper;
  }

  get slide_index(): number {
    return this.slides?.activeIndex! ?? 0;
  }

  onCompletePhone(phone: number) {
    this.form_data.phone = phone;
    this.slides?.slideTo(1);
  }

  onCompleteData(result: FormRegisterData) {
    const phone = this.form_data.phone;
    this.form_data = result;
    this.form_data.phone = phone;
    this.slides?.slideTo(2);
  }

  onFinish() {
    localStorage.setItem('user', JSON.stringify(this.form_data));
    this._router.navigate(['home']);
  }

  onBack() {
    if (this.slide_index > 0) {
      this.slides?.slideTo(this.slide_index - 1);
    } else {
      this._router.navigate(['start']);
    }
  }

  onSlide(index: number) {
    this.slides?.slideTo(index);
  }
}
