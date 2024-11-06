import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    variavel = 'World';
    changeHandler(event) {
    this.variavel = event.target.value;
    }
}