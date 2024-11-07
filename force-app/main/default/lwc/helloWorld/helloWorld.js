import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    nome = '';
    idade = '';
    estudante = false;
    clickedButtonMostrarNome;
    serie = '';

    changeHandler(event) {
    this.nome = event.target.value;
    }

    changeHandlerIdade(event) {
        this.idade = event.target.value;
    }

    changeHandlerEstudante(event) {
        this.estudante = event.target.checked;
        if(this.estudante === false) {
            this.serie = ''
        };
    }

    handleClickSalvar(event) {
        this.clickedButtonMostrarNome = this.nome;
    }
    
    handleClickLimpaCampo(event) {
        this.nome = '';
        this.idade = '';
        this.estudante = false;
        this.clickedButtonMostrarNome = '';
        this.serie = '';
    }

    get optionsSeries() {
        return [
            { label: 'Série 1', value: 'serie1' },
            { label: 'Série 2', value: 'serie2' },
            { label: 'Série 3', value: 'serie3' },
        ];
    }

    handleChange(event) {
        this.serie = event.detail.value;
    }
}