import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInput from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<TextInput />', () => {
  let component;
  const propsFactory = (customProps) => {
  const baseProps = {
    itemData: "",
    setSlot: () => {},
    formattedName: "",
  };
  return {...baseProps, ...customProps};
  };

  describe('Render', () =>{
    it('Should create component', () => {
      const props = propsFactory()
      component = mount(<TextInput {...props} />);
      expect(component).toBeTruthy();
    });
  });
  describe('Functional', () =>{
    it('Should execute setSlot prop on change', () => {
      const setSlotMock = jest.fn()
      const props = propsFactory({
        setSlot: setSlotMock
      })
      component = mount(<TextInput {...props} />);
      component.find("StyledTextInput").simulate('change', {target: {checked: true}});
      component.update();
      expect(setSlotMock).toHaveBeenCalled();
    });
  })
});

