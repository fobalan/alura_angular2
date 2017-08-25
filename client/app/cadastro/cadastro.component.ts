import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';


@Component({
    moduleId : module.id,
    selector : 'cadastro',
    templateUrl : './cadastro.component.html'
})
export class CadastroComponent{
    foto : FotoComponent = new FotoComponent();
    myForm : FormGroup;
    fotoService: FotoService;

    constructor(formBuilder: FormBuilder){
        this.myForm = formBuilder.group({
            titulo:['Titulo Obrigatório', Validators.required ],
            url:['', Validators.required],
            descricao: []
        });
        this.fotoService = new FotoService();
    }

    cadastrar(event){

        .subscribe(() =>{
            console.log('Foto ' + this.foto.titulo + ' adicionada com sucesso!');
            this.foto = new FotoComponent();
        }, erro => console.log(erro));
    }
}