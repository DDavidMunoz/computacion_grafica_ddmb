// app.component.ts
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PasswordModule } from 'primeng/password'; // Nuevo componente
import { DividerModule } from 'primeng/divider'; // Nuevo componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    PanelModule,
    ToastModule,
    PasswordModule, 
    DividerModule 
  ],
  providers: [MessageService],
  template: `
    <p-panel header="Formulario de Registro" styleClass="p-m-4">
      <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col-12 p-md-6">
          <label for="nombre">Nombre</label>
          <input id="nombre" type="text" pInputText placeholder="Nombre" [(ngModel)]="form.nombre">
        </div>
        <div class="p-field p-col-12 p-md-6">
          <label for="correo">Correo Electrónico</label>
          <input id="correo" type="email" pInputText placeholder="Correo Electrónico" [(ngModel)]="form.correo">
        </div>
        <div class="p-field p-col-12 p-md-6">
          <label for="edad">Edad</label>
          <p-inputNumber id="edad" placeholder="Edad" [(ngModel)]="form.edad"></p-inputNumber>
        </div>
        <div class="p-field p-col-12 p-md-6">
          <label for="fechaNacimiento">Fecha de Nacimiento</label>
          <p-calendar id="fechaNacimiento" [(ngModel)]="form.fecha"></p-calendar>
        </div>
        <div class="p-field p-col-12">
          <label for="pais">País</label>
          <p-dropdown id="pais" [options]="paises" optionLabel="name" [(ngModel)]="form.pais"></p-dropdown>
        </div>
        
        <p-divider></p-divider>
        
        <div class="p-field p-col-12">
          <p-checkbox id="acepta" label="Acepto los términos y condiciones" [(ngModel)]="form.acepta"></p-checkbox>
        </div>
        
        <div class="p-field p-col-12">
          <label>Sexo</label>
          <div class="p-grid p-dir-row">
            <div class="p-col-6">
              <p-radioButton name="sexo" value="Masculino" label="Masculino" [(ngModel)]="form.sexo"></p-radioButton>
            </div>
            <div class="p-col-6">
              <p-radioButton name="sexo" value="Femenino" label="Femenino" [(ngModel)]="form.sexo"></p-radioButton>
            </div>
          </div>
        </div>
        
        <div class="p-field p-col-12">
          <label for="comentarios">Comentarios</label>
          <p-inputTextarea id="comentarios" placeholder="Comentarios" [(ngModel)]="form.comentarios"></p-inputTextarea>
        </div>
        
        <div class="p-col-12">
          <p-button label="Enviar" (click)="enviar()"></p-button>
        </div>
      </div>
    </p-panel>

    <p-toast></p-toast>
  `,
})
export class AppComponent {
  form: any = {};
  paises = [
    { name: 'Colombia', code: 'CO' },
    { name: 'México', code: 'MX' },
    { name: 'Argentina', code: 'AR' }
  ];

  constructor(private messageService: MessageService) {}

  enviar() {
    this.messageService.add({
      severity: 'success',
      summary: 'Enviado',
      detail: `Nombre: ${this.form.nombre || ''}`
    });
  }
}