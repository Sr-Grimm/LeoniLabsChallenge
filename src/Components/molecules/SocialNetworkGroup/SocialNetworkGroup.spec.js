import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialNetworkGroup from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<SocialNetworkGroup />', () => {
  let component;
  const propsFactory = (customProps) => {
  const baseProps = {
    webpage: "www.test.com",
    facebook: "www.test.com",
    twitter: "www.test.com",
    youtube: "www.test.com"
  };
  return {...baseProps, ...customProps};
  };

  describe('Render', () =>{
    it('Should create component', () => {
      const props = propsFactory()
      component = mount(<SocialNetworkGroup {...props} />);
      expect(component).toBeTruthy();
    });
  })
});

