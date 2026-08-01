import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Valor } from './Valor';

@Component({
  selector: 'app-listas-veiculos',
  imports: [ FormsModule ],
  templateUrl: './listas-veiculos.html',
  styleUrl: './listas-veiculos.css',
})
export class ListasVeiculos {
  cadastro : string = 'dados'
  lista : string = 'dados'
  valor : number = 0.0
  listaCadastro : Valor[] = []

  addValor(){
    let valor = new Valor()
    valor.idCadastro = this.listaCadastro.length + 1
    valor.lista = this.lista
    valor.descricao_cadastro = this.cadastro
    valor.Valor = this.valor

    this.listaCadastro.push(valor)
  }
}





