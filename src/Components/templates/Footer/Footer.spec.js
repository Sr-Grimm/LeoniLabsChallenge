import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  let component;

  describe('Render', () =>{
    it('Should create component', () => {
      component = mount(<Footer />);
      expect(component).toBeTruthy();
    });
  })
});

