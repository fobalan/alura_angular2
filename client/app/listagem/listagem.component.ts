import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId : module.id,
    selector : 'listagem',
    templateUrl : './listagem.component.html'
})

export class ListagemComponent{
    fotos: Object = [];

    constructor(){
        .subscribe(fotos =>{
            this.fotos = fotos;
        }, erro => console.log(erro))
    }

    remover(foto: FotoComponent){
        console.log('Removendo foto ' + foto.titulo);
    }
}