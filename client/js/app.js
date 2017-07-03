/**
 * @name App
 * @description singleton object
 * which contains instances of services
 */
let App = {
    store: null,
    actions: {},
    middlewares: [],
    reducers: {},
    services: {}
};

/**
 * @function setupActions
 * @description setup action for call by store dispatch
 * @param actions {Object} - key - action name, value - function
 */
export function setupActions(actions) {
    Object.keys(actions).forEach(name => {
        App.actions[name] = function() {
            App.store.dispatch(actions[name].apply(this, arguments));
        };
    });
}

/**
 * @function setupMiddlewares
 * @description setup middlewares of feature
 * @param middlewares {Array} - middlewares list
 */
export function setupMiddlewares(middlewares) {
    if (Array.isArray(middlewares)) {
        App.middlewares = [
            ...App.middlewares,
            ...middlewares
        ];
    }
}

/**
 * @function setupReducers
 * @description setup reducers of feature
 * @param reducers {Object} - key - reducer name, value - function
 */
export function setupReducers(reducers) {
    if (typeof reducers === 'object') {
        Object.assign(App.reducers, reducers);
    }
}

export default App;
