import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import MemberCard from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<MemberCard />', () => {
  const mountWithRouter = (data) => {
    return mount(
      <Router>
        <MemberCard data={data} />
      </Router>
    );
  };
  let component;
  const dataFactory = (customData) => {
  const baseData = {
    first_name: "test",
    last_name: "test",
    title: "test",
    id: "test",
    url: "test",
    twitter_account: "test",
    youtube_account: "test",
    facebook_account: "test"
  };
  return {...baseData, ...customData};
  };

  describe('Render', () =>{
    it('Should create component', () => {
      const data = dataFactory();
      component = mountWithRouter(data);
      expect(component).toBeTruthy();
    });
    it('Should create component with middle name prop', () => {
      const data = dataFactory({
        middle_name: "test"
      });
      component = mountWithRouter(data);
      expect(component).toBeTruthy();
    });
  });
});

