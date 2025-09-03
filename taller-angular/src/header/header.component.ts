import { Component } from "@angular/core";
import { LogoComponent } from "../logo/logo.component";
import { BuscadorComponent } from "../buscador/buscador.component";
@Component({
    selector: 'header-app',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports:[LogoComponent,BuscadorComponent]

})

export class HeaderComponent{}
