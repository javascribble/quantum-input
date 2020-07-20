import { Component, template, setAttribute } from '../../references/quantum.js';
import html from '../templates/check.js';

export class Check extends Component {
    #input;

    constructor() {
        super();

        this.#input = this.shadowRoot.querySelector('input');
    }

    static template = template(html);

    static attributes = ['state', 'disabled', 'name', 'value'];

    stateChangedCallback(value) {
        switch (value) {
            case 'checked':
                this.#input.checked = value;
                break;
            case 'indeterminate':
                this.#input.indeterminate = true;
                break;
            default:
                this.#input.removeAttribute('checked');
                break;
        }
    }

    disabledChangedCallback(value) {
        setAttribute(this.#input, 'disabled', value);
    }

    nameChangedCallback(value) {
        setAttribute(this.#input, 'name', value);
    }

    valueChangedCallback(value) {
        setAttribute(this.#input, 'value', value);
    }
}

customElements.define('quantum-check', Check);