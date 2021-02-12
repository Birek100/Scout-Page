import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
//import App from "./containers/container.jsx";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer.jsx';
import { composeWithDevTools } from 'redux-devtools-extension';



const store = createStore(rootReducer, composeWithDevTools());
window.store = store;

ReactDOM.render(
    <Provider store={store}>
<App />
</Provider>
, document.getElementById("root"));
