import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  template: `<app-header>`,
  styleUrl: './app.component.scss'
})

export class AppComponent {}