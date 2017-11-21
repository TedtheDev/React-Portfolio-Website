import React from 'react';
import NavButton from '../src/components/nav_button';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test.skip('Snapshot - NavButton renders text', () => {
    const component = renderer.create(
        <NavButton to="/portfolio" buttonText="Portfolio" />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test.skip('NavButton renders text', () => {
    const navButton = shallow(
        <NavButton to="/portfolio" buttonText="Portfolio" />
    );

    expect(navButton.text()).toEqual('Portfolio');
});