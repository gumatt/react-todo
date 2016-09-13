import { autorun, observable, computed, action } from 'mobx';

class MenuStore {
    @observable items = [];

    constructor() {
        autorun( () => console.log(this.items.length + " items in menu"));
    }

    @action
    addItem(item) {
        this.items.push(item);
    }
}

let menuStore = new MenuStore();
menuStore.addItem('first Item');

export { menuStore }
