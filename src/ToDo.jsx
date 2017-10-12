import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class ToDo extends Component {
    constructor(props) {
        super(props);

        this.create = this.create.bind(this);
        this.filter = this.filter.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    create(event) {
        if (event.which === 13) {
            this.props.store.createToDo(event.target.value);
            event.target.value = '';
        }
    }

    filter(event) {
        this.props.store.filter = event.target.value;
    }

    toggleComplete(todo) {
        todo.complete = !todo.complete;
    }

    render() {
        const { clearComplete, todos, filter, filteredToDos } = this.props.store;
        const list = filteredToDos.map(todo => (
            <li key={todo.id}>
                <input
                    type="checkbox"
                    value={todo.complete}
                    checked={todo.complete}
                    onChange={() => this.toggleComplete(todo)}
                />
                {todo.value}
            </li>
        ));

        return (
            <div>
                <h1>MobX ToDos</h1>
                <div style={{ marginBottom: "25px"}}>
                    <span>add new todo and press enter key: </span>
                    <input onKeyPress={this.create} />
                </div>
                <div style={{ marginBottom: "25px"}}>
                    <span>filter: </span>
                    <input value={filter} onChange={this.filter} />
                </div>
                <ul style={{ textAlign: "left"}}>{list}</ul>
                <a href="#" onClick={clearComplete}>clear completed ToDos</a>
            </div>
        );
    }
}

export default ToDo;
