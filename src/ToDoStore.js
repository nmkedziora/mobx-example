import { autorun, observable } from 'mobx';

class ToDoStore {
    @obeservable todos = ['buy milk', 'buy cheese', 'rent a flat'];
    @observable filter = '';
}

export default ToDoStore;
