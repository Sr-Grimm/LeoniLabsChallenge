import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenericErrorScreen from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<GenericErrorScreen />', () => {
  let component;

  describe('Render', () =>{
    it('Should create component', () => {
      component = mount(<GenericErrorScreen />);
      expect(component).toBeTruthy();
    });
  })
});

