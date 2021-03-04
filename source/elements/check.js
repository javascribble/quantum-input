export class Check extends Quantum {
    #input = this.shadowRoot.querySelector('input');

    constructor() {
        super();
    }

    static get observedAttributes() { return ['name', 'disabled', 'value']; }

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
        }
    }
}