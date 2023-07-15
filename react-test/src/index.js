import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import store from "./Store/index.js";
import App from './App';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);