import React, { Component } from 'react';
import { observer } from 'mobx-react';

// implementation from Mbox docs
// export default observer(({ form }) => {
//     console.log(form);
//     return (
//         <form onSubmit={form.onSubmit}>
//             <label htmlFor="{form.$('firstName').id}">{form.$('firstName').label}</label>
//             <input {...form.$('firstName').bind()} />
//             <small style={{ color: 'red'}}>{form.$('firstName').error}</small>
//
//             <label htmlFor={form.$('email').id}>{form.$('email').label}</label>
//             <input {...form.$('email').bind()} />
//             <small style={{ color: 'red'}}>{form.$('email').error}</small>
//
//             <br />
//             <button id="submit" type="submit" onClick={form.onSubmit}>confirm booking</button>
//             <button type="button" onClick={form.onClear}>Clear</button>
//             <button type="button" onClick={form.onReset}>Reset</button>
//
//             <p>{form.error}</p>
//         </form>
//     );
// });

@observer
class MobxForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { form } = this.props;
        console.log(form);
        console.log(form.$('firstName'));
        return (
            <form onSubmit={form.onSubmit}>
                <label htmlFor="{form.$('firstName').id}">{form.$('firstName').label}</label>
                <input {...form.$('firstName').bind()} />
                <small style={{ color: 'red'}}>{form.$('firstName').error}</small>

                <label htmlFor={form.$('email').id}>{form.$('email').label}</label>
                <input {...form.$('email').bind()} />
                <small style={{ color: 'red'}}>{form.$('email').error}</small>

                <br />
                <button id="submit" type="submit" onClick={form.onSubmit}>confirm booking</button>
                <button type="button" onClick={form.onClear}>Clear</button>
                <button type="button" onClick={form.onReset}>Reset</button>

                <p>{form.error}</p>
            </form>
        );
    }
}

export default MobxForm;
