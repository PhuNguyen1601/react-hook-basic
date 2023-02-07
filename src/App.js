import Nav from './components/Nav';
import './App.css';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import Covid from './components/Covid';
const App = () => {
    // const [name, setName] = useState('');
    // const [todos, setTodos] = useState([
    //     { id: 'todo1', title: 'watching TV', type: 'fuka' },
    //     { id: 'todo2', title: 'watching YTB', type: 'fuka' },
    //     { id: 'todo3', title: 'playing Game', type: 'ngp' },
    //     { id: 'todo3', title: 'reading Books', type: 'ngp' },
    // ]);

    // const handleEventClick = (event) => {
    //     if (!name) {
    //         alert('Empty input');
    //         return;
    //     }
    //     let newTodo = { id: Math.floor(Math.random() * 100000 + 1), title: name, type: 'fuka' };
    //     setTodos([...todos, newTodo]);
    //     setName('');
    // };

    // const handleOnChangeInput = (event) => {
    //     setName(event.target.value);
    // };

    // const deleteDataTodo = (id) => {
    //     let currentTodos = todos;
    //     currentTodos = currentTodos.filter((item) => item.id !== id);
    //     setTodos(currentTodos);
    // };

    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <img src={logo} className="App-logo" alt="logo" />
                <h3>Hello! React Hook</h3>
                <Covid />
                {/* <Todo myData={todos} title="TODO List" deleteDataTodo={deleteDataTodo} />
                <Todo myData={todos.filter((item) => item.type === 'ngp')} title="TODO ngp" />
                <input type="text" value={name} onChange={(event) => handleOnChangeInput(event)} />
                <button type="button" onClick={(event) => handleEventClick(event)}>
                    Click me
                </button> */}
            </header>
        </div>
    );
};

export default App;
