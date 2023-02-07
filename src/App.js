import Nav from './components/Nav';
import './App.css';
import logo from './logo.svg';
import { useState } from 'react';

const App = () => {
    const [name, setName] = useState('');
    const [fullName, setFullName] = useState('');
    const [todos, setTodos] = useState([]);

    const handleEventClick = (event) => {
        setFullName(name);
    };
    const handleOnChangeInput = (event) => {
        setName(event.target.value);
    };
    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello! {fullName}</h1>
                <input type="text" value={name} onChange={(event) => handleOnChangeInput(event)} />
                <button type="button" onClick={(event) => handleEventClick(event)}>
                    Click me!
                </button>
            </header>
        </div>
    );
};

export default App;
