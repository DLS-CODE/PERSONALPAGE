import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ocultarNav() {

    let ubicacionPrincipal = window.pageXOffset;
    window.onscroll = function () {
      let desplazamientoActual = window.pageXOffset
      if (ubicacionPrincipal >= desplazamientoActual) {
        document.getElementById('navbar').style.top = '0';
      } else {
        document.getElementById('navbar').style.top = '-100px';
      }
      ubicacionPrincipal = desplazamientoActual;
    }

  }
}
