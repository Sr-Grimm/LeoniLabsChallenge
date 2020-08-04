import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  let component;

  describe('Render', () =>{
    it('Should create component', () => {
      component = mount(<Header />);
      expect(component).toBeTruthy();
    });
  })
});

