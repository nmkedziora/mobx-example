import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class SampleForm extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleChange(event) {
        this.props.store.save(event.target.value, event.target.id);
    }

    handleCopy(event) {
        this.props.store.saveCopy(event.target.value, event.target.id);
    }

    render() {
        return (
            <form>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" onChange={this.handleChange} />

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" onChange={this.handleChange} />

                <br />
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" value={this.props.store.fullName} disabled />

                <br />
                <label htmlFor="firstNameCopy">Copied First Name</label>
                <input id="firstNameCopy" type="text" value={this.props.store.firstNameCopy} onChange={this.handleCopy} />

                <label htmlFor="lastNameCopy">Copied Full Name</label>
                <input id="lastNameCopy" type="text" value={this.props.store.lastNameCopy} onChange={this.handleCopy} />
            </form>
        );
    }
}

export default SampleForm;
