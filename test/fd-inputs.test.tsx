import React from 'react';
import Input from '../src/fd-inputs';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

describe('FD Input', () => {
    configure({ adapter: new Adapter() });

    it('should render correctly', () => {
        const wrapper = mount(<Input id="input" localStorage={true}/>);
        const instance = (wrapper.instance() as Input);
        instance.store = jest.fn();
        const input = wrapper.find('input');
        input.simulate('change', {target: { value: 'text'}});
        expect(instance.store).toBeCalledWith('text');
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should render with value correctly', () => {
        const wrapper = mount(<Input id="input" value="test value"/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

});
