import Home from "./views/Home.js";
import NotFoundView from "./views/NotFoundView.js";
import PostView from "./views/PostView.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getPathParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
}

const router = async () => {
    const routes = [
        {
            path: '/',
            view: Home
        },
        {
            path: '/posts/:id',
            view: PostView,
        },
        {
            path: '/404',
            view: NotFoundView
        }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        navigateTo('/404');
        return;
    }

    const view = new match.route.view(getPathParams(match));
    document.querySelector('#app').innerHTML = await view.getHtml();

};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});