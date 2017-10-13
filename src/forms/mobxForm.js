import validatorjs from 'validatorjs';
//https://www.npmjs.com/package/validatorjs

import MyForm from 'mobx-react-form';

validatorjs.useLang('pl');

const plugins = { dvr: validatorjs };
const fields = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Insert Email',
        rules: 'required|email|string|between:5,25',
        value: 's.jobs@apple.com'
    }, {
        name: 'firstName',
        label: 'First Name',
        placeholder: 'Insert First Name',
        rules: 'required|string|between:5,25',
    },
];

const initials = {
    email: 's.jobs@apple.com',
}

const defaults = {
    email: 'example@apple.com',
}


const hooks = {
  onSuccess(form) {
    alert('Form is valid! Send the request here.');
    // get field values
    console.log('Form Values!', form.values());
  },
  onError(form) {
    alert('Form has errors!');
    // get all form errors
    console.log('All form errors', form.errors());
  }
}


// const mobxForm = new MobxReactForm({ fields }, { plugins, hooks });
// export default mobxForm;

export default new MyForm({ fields, initials, defaults }, { plugins, hooks });
