import { computed, observable } from 'mobx';

class ToDo {
    @observable value;
    @observable id;
    @observable complete;

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }
}

class ToDoStore {
    @observable todos = [];
    @observable filter = '';

    @computed get filteredToDos() {
        let matchesFilter = new RegExp(this.filter, 'i');

        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value));
    }

    createToDo(value) {
        this.todos.push(new ToDo(value));
    }

    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.complete);
        this.todos.replace(incompleteTodos);
    }
}

var store = new ToDoStore;

export default store;
