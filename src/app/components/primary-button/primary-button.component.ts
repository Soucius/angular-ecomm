import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output();
}
