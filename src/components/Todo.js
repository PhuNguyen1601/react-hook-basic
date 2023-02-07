const Todo = ({ title, myData, deleteDataTodo }) => {
    const handleDelete = (id) => {
        deleteDataTodo(id);
    };
    return (
        <div className="todos-container">
            <div className="title">{title}</div>
            {myData.map((item, index) => {
                return (
                    <div key={index}>
                        {' '}
                        <li className="todo-child">
                            {item.title} <span onClick={() => handleDelete(item.id)}>x</span>
                        </li>
                    </div>
                );
            })}
            <hr />
        </div>
    );
};

export default Todo;
