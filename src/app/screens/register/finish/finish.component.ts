import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent {
  @Output() oncomplete = new EventEmitter<void>();
  checked: boolean = false;

  constructor() {}

  onSubmit() {
    this.oncomplete.emit();
  }
}
