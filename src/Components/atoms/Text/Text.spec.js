import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Text from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<Text />', () => {
  let component;
  describe('Render', () =>{
    it('Should create component', () => {
      component = mount(<Text />);
      expect(component).toBeTruthy();
    });
  })
});

