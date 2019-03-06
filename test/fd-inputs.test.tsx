import React from 'react';
import {TextInputs} from '../src/fd-inputs';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

describe('FD Input', () => {
    configure({ adapter: new Adapter() });

    it('should render correctly', () => {
        const wrapper = mount(<TextInputs id="input" localStorage={true}/>);
        const instance = (wrapper.instance() as TextInputs);
        instance.store = jest.fn();
        const input = wrapper.find('input');
        input.simulate('change', {target: { value: 'text'}});
        expect(instance.store).toBeCalledWith('text');
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should render with value correctly', () => {
        const wrapper = mount(<TextInputs id="input" value="test value"/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should render with label correctly', () => {
        const wrapper = mount(<TextInputs id="input" label="this is the label" value="test value"/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('should render with title correctly', () => {
        const wrapper = mount(<TextInputs id="input" title="this is the title" label="this is the label" value="test value"/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

});
