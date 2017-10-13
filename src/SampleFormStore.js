import { computed, observable } from 'mobx';

class SampleFormStore {
    @observable firstName = '';
    @observable lastName = '';
    @observable fullName = 'fullName from API';
    @observable firstNameCopy = '';
    @observable lastNameCopy = '';

    save(value, name) {
        console.log('save', value, name);
        this[name] = value;
        this.fullName = this.firstName + this.lastName;
        this.firstNameCopy = this.firstName;
        this.lastNameCopy = this.lastName;
    }
    saveCopy(value, name) {
        this[name] = value;
    }
}

const sampleFormStore = new SampleFormStore;

export default sampleFormStore;
