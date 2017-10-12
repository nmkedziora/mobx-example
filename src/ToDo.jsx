import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class ToDo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { todos } = this.props
        return (
            <h1>MobX</h1>
            <ul>
                <li>{todos[0]}</li>
            </ul>
        );
    }
}

export default ToDo;
