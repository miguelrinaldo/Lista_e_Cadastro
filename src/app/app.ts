import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListasVeiculos } from "./listas-veiculos/listas-veiculos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListasVeiculos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lista_e_cadastro');
}
