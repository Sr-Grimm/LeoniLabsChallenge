import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let component;

  const propsFactory = (customProps) => {
  const baseProps = {
    label: "test"
  };
  return {...baseProps, ...customProps};
  };

  describe('Render', () =>{
    it('Should create component', () => {
      const props = propsFactory()
      component = mount(<Button {...props} />);
      expect(component).toBeTruthy();
    });
  })
  describe('Functional', () =>{
    it('Should execute onPress function when is clicked', () => {
      const onClickMock = jest.fn()
      const props = propsFactory({
        onClick: onClickMock
      })
      component = mount(<Button {...props} />);
      component.simulate("click");
      component.update();
      expect(onClickMock).toHaveBeenCalled();
    });
  })
});

