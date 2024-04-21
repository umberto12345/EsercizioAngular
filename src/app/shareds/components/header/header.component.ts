import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  setTheme(){
    const root = document.documentElement;
    root.style.setProperty('--bs-primary', "#007D57");
  }
}
