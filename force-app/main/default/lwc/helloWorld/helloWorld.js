import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    variavel = 'World';
    clickedButtonMostrarNome;

    changeHandler(event) {
    this.variavel = event.target.value;
    }

    handleClick(event) {
        this.clickedButtonMostrarNome = this.variavel;
    }
    
    handleClick2(event) {
        this.clickedButtonMostrarNome = '';
    }
}