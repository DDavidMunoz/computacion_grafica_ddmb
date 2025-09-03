import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejmeplo1Component } from './ejmeplo1/ejmeplo1.component';
import { MicomponentePersona } from './personas/personas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejmeplo1Component, MicomponentePersona],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'base_angular';
}
