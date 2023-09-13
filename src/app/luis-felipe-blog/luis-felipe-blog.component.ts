import { Component, OnInit } from '@angular/core';
import { ids } from '../blogparte2/ids'; // Importe os IDs do arquivo ids.ts

@Component({
  selector: 'app-luis-felipe-blog',
  templateUrl: './luis-felipe-blog.component.html',
  styleUrls: ['./luis-felipe-blog.component.css']
})
export class LuisFelipeBlogComponent implements OnInit {
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
    // Adicione a classe 'modal-open' ao body quando a modal for aberta
    document.body.classList.add('modal-open');
  }

  // Método para fechar a janela modal
  fecharModal() {
    this.modalAberta = false;
    // Remova a classe 'modal-open' do body quando a modal for fechada
    document.body.classList.remove('modal-open');
  }
}