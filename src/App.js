import './App.css';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Todo />
            </div>
        </Provider>
    );
}

export default App;
