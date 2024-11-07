import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    nome = '';
    idade = '';
    estudante = false;
    clickedButtonMostrarNome;

    changeHandler(event) {
    this.nome = event.target.value;
    }

    changeHandlerIdade(event) {
        this.idade = event.target.value;
    }

    changeHandlerEstudante(event) {
        this.estudante = event.target.checked;
    }

    handleClickSalvar(event) {
        this.clickedButtonMostrarNome = this.nome;
    }
    
    handleClickLimpaCampo(event) {
        this.nome = '';
        this.idade = '';
        this.estudante = false;
        this.clickedButtonMostrarNome = '';
    }
}