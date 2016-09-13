import { observable, action, computed } from 'mobx';
import _ from 'lodash';

class MenuData {
    @observable title;
    @observable enabled;
    @observable parent;
    @observable counter;

    constructor( data, parent ) {
        this.title = data.title;
        this.enabled = data.enabled;
        this.parent = parent;
        this.path = data.path;
        this.icon = data.icon;
        this.counter = data.counter;

    }

    /**
     * 
     * activate is used to toggle state of this item, and to notify the parent of the change in active state
     * 
     */
    @action
    activate() {
        this.active = !this.active;
        this.parent.activate();
    }


    @computed get active() {
        return _.startsWith(location.hash.replace(/#/, ''), this.path);
    }
}

export { MenuData };
