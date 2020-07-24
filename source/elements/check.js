import html from '../templates/check.js';

export class Check extends quantum.Component {
    #input;

    constructor() {
        super();

        this.#input = this.shadowRoot.querySelector('input');
    }

    static template = quantum.template(html);

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
                quantum.setAttribute(this.#input, attribute, currentValue);
                break;
        }
    }
}

customElequantumments.define('quantum-check', Check);