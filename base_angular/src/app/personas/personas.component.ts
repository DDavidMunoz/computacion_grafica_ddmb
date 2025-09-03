import { Component } from "@angular/core";

@Component({
    selector: 'personas-app',
    templateUrl: './personas.component.html',
    styleUrl: './personas.component.css',

})

export class MicomponentePersona{
    public mensaje = 'Mi mensaje';
    public otroMensaje = 'Segundo Mensaje'
}