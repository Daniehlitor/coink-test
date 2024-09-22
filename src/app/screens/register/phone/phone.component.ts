import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent {
  @Output() oncomplete = new EventEmitter<number>();
  phone: string = '';

  constructor() {}

  onClick(index: number) {
    if (index < 9 || index == 10) {
      if (this.phone.length >= 10) return;

      var number = index == 10 ? 0 : index + 1;
      this.phone += number;
    }

    if (index == 9) {
      if (this.phone.length == 0) return;
      this.phone = this.phone.slice(0, -1);
    }
  }

  onSubmit() {
    this.oncomplete.emit(parseInt(this.phone));
  }
}
