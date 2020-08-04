import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialNetworkLink from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<SocialNetworkLink />', () => {
  let component;
  const propsFactory = (customProps) => {
  const baseProps = {
    url: "www.google.com",
  };
  return {...baseProps, ...customProps};
  };

  describe('Render', () =>{
    it('Should create component with twitter icon', () => {
      const props = propsFactory({icon: "twitter"})
      component = mount(<SocialNetworkLink {...props} />);
      expect(component).toBeTruthy();
    });
    it('Should create component with youtube icon', () => {
      const props = propsFactory({icon: "youtube"})
      component = mount(<SocialNetworkLink {...props} />);
      expect(component).toBeTruthy();
    });
    it('Should create component with facebook icon', () => {
      const props = propsFactory({icon: "facebook"})
      component = mount(<SocialNetworkLink {...props} />);
      expect(component).toBeTruthy();
    });
    it('Should create component with web icon', () => {
      const props = propsFactory({icon: "web"})
      component = mount(<SocialNetworkLink {...props} />);
      expect(component).toBeTruthy();
    });
    it('Should create component with linkedin icon', () => {
      const props = propsFactory({icon: "linkedin"})
      component = mount(<SocialNetworkLink {...props} />);
      expect(component).toBeTruthy();
    });
    it('Should create component with default icon', () => {
      const props = propsFactory({icon: "default"})
      component = mount(<SocialNetworkLink {...props} />);
      expect(component).toBeTruthy();
    });
  })
});

