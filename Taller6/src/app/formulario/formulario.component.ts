import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formulario',
  imports: [ButtonModule,ReactiveFormsModule, InputTextModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
    miFormulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email])
  });
onSubmit() {
    if (this.miFormulario.valid) {
      console.log('Datos enviados:', this.miFormulario.value);
    } else {
      console.log('Formulario inválido');
      this.miFormulario.markAllAsTouched();
    }
  }
}
