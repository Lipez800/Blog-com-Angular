import { Component, OnInit } from '@angular/core';
import { ids } from './ids'; // Importe os IDs do arquivo ids.ts

@Component({
  selector: 'app-blogparte2',
  templateUrl: './blogparte2.component.html',
  styleUrls: ['./blogparte2.component.css']
})
export class Blogparte2Component implements OnInit {
  idsComNomeEImagem = ids; // Armazene os IDs com nome e foto aqui
  modalAberta = false; // Controle para abrir/fechar a janela modal
  idSelecionada: any; // Armazena detalhes da ID selecionada

  constructor() { }

  ngOnInit(): void {
    
  }

  // Método para abrir a janela modal com informações da ID
  abrirModal(id: any) {
    this.idSelecionada = id;
    this.modalAberta = true;
    // Adicione a classe 'modal' ao body quando a modal for aberta
    document.body.classList.add('modal');
  }

  // Método para fechar a janela modal
  fecharModal() {
    this.modalAberta = false;
    // Remova a classe 'modal' do body quando a modal for fechada
    document.body.classList.remove('modal');
  }
}
