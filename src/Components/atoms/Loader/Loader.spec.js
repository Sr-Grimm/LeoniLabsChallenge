import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<Loader />', () => {
  let component;
  const propsFactory = (customProps) => {
  const baseProps = {
  };
  return {...baseProps, ...customProps};
  };

  describe('Render', () =>{
    it('Should create component', () => {
      const props = propsFactory()
      component = mount(<Loader {...props} />);
      expect(component).toBeTruthy();
    });
  })
});

