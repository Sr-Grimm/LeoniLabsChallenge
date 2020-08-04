import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RadioInput from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<RadioInput />', () => {
  let component;
  const propsFactory = (customProps) => {
  const baseProps = {
    returnValue: () => {},
    label: "test",
    group: "test",
    value: "test"
  };
  return {...baseProps, ...customProps};
  };

  describe('Render', () =>{
    it('Should create component', () => {
      const props = propsFactory()
      component = mount(<RadioInput {...props} />);
      expect(component).toBeTruthy();
    });
  })
  describe('Functional', () =>{
    it('Should call returnValue prop on change', () => {
      const returnValueMock = jest.fn();
      const props = propsFactory({
        returnValue: returnValueMock
      });
      component = mount(<RadioInput {...props} />);
      component.find("StyledRadioInput").simulate('change', {target: {checked: true}});
      expect(returnValueMock).toHaveBeenCalled();
    });
  })
});

