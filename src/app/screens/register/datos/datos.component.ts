import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormRegisterData } from '../register.component';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { HttpService, SelectData } from 'src/app/services/http.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss'],
})
export class DatosComponent implements OnInit {
  @Output() oncomplete = new EventEmitter<FormRegisterData>();

  formData: FormGroup = new FormGroup({
    document_type: new FormControl('', [Validators.required]),
    document_number: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    document_date: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    email_check: new FormControl('', [
      Validators.required,
      Validators.email,
      this.differentThan('email'),
    ]),
    password: new FormControl('', [Validators.required]),
    password_check: new FormControl('', [
      Validators.required,
      this.differentThan('password'),
    ]),
  });

  show_pass: boolean[] = [false, false];

  genders?: SelectData[];
  documentTypes?: SelectData[];

  constructor(private _http: HttpService) {}

  async ngOnInit() {
    await this._http.presentLoading();
    await this._http.wait();
    this.genders = await this._http.genders;
    this.documentTypes = await this._http.documentTypes;
    this._http.hideLoading();
  }

  onShow(index: number) {
    console.log(index);
    this.show_pass[index] = !this.show_pass[index];
  }

  isTouched(name: string) {
    return (
      this.formData.controls[name] &&
      (this.formData.controls[name].touched ||
        this.formData.controls[name].dirty)
    );
  }

  getErrors(name: string) {
    return this.formData.controls[name].errors ?? {};
  }

  differentThan(compareTo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const compareValue = this.formData?.controls[compareTo].value;
      return value != compareValue ? { isDifferent: true } : null;
    };
  }

  onSubmit() {
    this.oncomplete.emit(this.formData.value);
  }
}
