import chai, { should } from 'chai';
import { shallow, mount } from 'enzyme';

import { MenuData } from './MenuData.js';

should();

describe('MenuData', function () {
    it('should exist', function () {
        MenuData.should.exist;
    });

    it('menuData object should have core properties [title, active, enabled, parent]', function () {
        const menuData = new MenuData('Home Base', true, true, null);
        menuData.should.exist;
        menuData.should.have.property('title');
        menuData.should.have.property('active');
        menuData.should.have.property('enabled');
        menuData.should.have.property('parent');
        menuData.should.not.have.property('goat');
        // menuData.active.should.be.true;
    });
});
