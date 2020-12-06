import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Home from "./containers/Home";

function App() {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    );
}

export default App;
