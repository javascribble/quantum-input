import { Component, template, define, setAttribute } from '../import.js';
import html from '../templates/check.js';

export class Check extends Component {
    #input;

    constructor() {
        super();

        this.#input = this.shadowRoot.querySelector('input');
    }

    static template = template(html);

    static get observedAttributes() { return ['state', 'disabled', 'name', 'value']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        switch (attribute) {
            case 'state':
                switch (currentValue) {
                    case 'checked':
                        this.#input.checked = currentValue;
                        break;
                    case 'indeterminate':
                        this.#input.indeterminate = true;
                        break;
                    default:
                        this.#input.removeAttribute('checked');
                        break;
                }
                break;
            default:
                setAttribute(this.#input, attribute, currentValue);
                break;
        }
    }
}

define('quantum-check', Check);