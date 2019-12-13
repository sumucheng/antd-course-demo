import { mount } from 'enzyme';
import TestDemo from '../src/components/TestDemo';

test('TestDemo', () => {
    const wrapper = mount(<TestDemo />);
    expect(wrapper.find('div').text()).toBe('test');
});