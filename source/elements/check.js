import { Component, template } from '../../references/quantum.js';
import html from '../templates/element.js';

export class Check extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-check', Check);