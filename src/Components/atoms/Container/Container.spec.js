import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Container from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<Container />', () => {
  let component;
  const propsFactory = (customProps) => {
  const baseProps = {
    mt: "0px",
    mb: "0px",
    ml: "0px",
    mr: "0px",
    pt: "0px",
    pb: "0px",
    pl: "0px",
    pr: "0px"
  };
  return {...baseProps, ...customProps};
  };

  describe('Render', () =>{
    it('Should create component', () => {
      const props = propsFactory()
      component = mount(<Container {...props} />);
      expect(component).toBeTruthy();
    });
  })
});

