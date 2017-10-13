import { observable } from 'mobx';

class MobxFormStore {
    @observable firstName = '';
    @observable email = 'example@example.com';

    save(value, name) {
        console.log('save', value, name);
        this[name] = value;
    }
}
const mobxFormStore = new MobxFormStore();

export default mobxFormStore;
