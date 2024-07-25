import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Dom!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In sed tempor sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit. 
                Nulla luctus libero in lacus volutpat, a lacinia risus commodo. 
                In hac habitasse platea dictumst. 
                Suspendisse egestas nulla non risus sollicitudin, nec luctus ligula interdum. 
                Sed a ante ultrices, accumsan massa at, lacinia orci. 
                Fusce sit amet elit vel dolor ultrices auctor.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}