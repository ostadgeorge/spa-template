import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Not Found");
    }

    async getHtml() {
        return `
            <div class="container">
                <h1>404</h1>
                <p>Sorry, the page you visited does not exist.</p>
            </div>
        `;
    }
}