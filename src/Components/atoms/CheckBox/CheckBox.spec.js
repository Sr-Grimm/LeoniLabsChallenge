import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheckBox from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<CheckBox />', () => {
  let component;

  const propsFactory = (customProps) => {
  const baseProps = {
    label: "test",
    toggle: () => {}
  };
  return {...baseProps, ...customProps};
  };

  describe('Render', () =>{
    it('Should create component', () => {
      const props = propsFactory()
      component = mount(<CheckBox {...props} />);
      expect(component).toBeTruthy();
    });
    it('Should create component with disable prop as true', () => {
      const props = propsFactory({
        disable: true
      })
      component = mount(<CheckBox {...props} />);
      expect(component).toBeTruthy();
    });
  })
  describe('Functional', () =>{
    it('Should execute toggle function when it is called', () => {
      const toggleMock = jest.fn()
      const props = propsFactory({
        toggle: toggleMock
      })
      component = mount(<CheckBox {...props} />);
      component.find("StyledCheck").simulate('change', {target: {checked: true}});
      component.update();
      expect(toggleMock).toHaveBeenCalled();
    });
  })
});

