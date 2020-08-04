import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Searcher from './';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<Searcher />', () => {
  const mountWithRouter = (component) => {
    return mount(
      <Router>
        {component}
      </Router>
    );
  };
  let component;

  describe('Render', () =>{
    it('Should create component', () => {
      component = mountWithRouter(<Searcher search={() => {}} />);
      expect(component).toBeTruthy();
    });
  });
  describe('Functional', () =>{
    describe('Simple mode', () => {
      it('Should go to Advanced mode by change checkbox to true', () => {
        component = mountWithRouter(<Searcher search={() => {}} />);
        component.find('CheckBox[label="Advanced Search"]')
          .find("StyledCheck").simulate('change', {target: {checked: true}});
        component.update();
        expect(component).toBeTruthy();
      });
      it('Should simulate a simple query', () => {
        const searchFunctionMock = jest.fn();
        component = mountWithRouter(<Searcher search={searchFunctionMock} />);
        component.find('RadioInput[value="first_name"]')
         .props().returnValue("first_name");
        component.find('TextInput[formattedName="Search here"]')
         .find("StyledTextInput").simulate('change', {target: {value: "Ron"}});
        component.find('CustomButton[label="Search"]').simulate("click");
        component.update();
        const wantedResponse = {
          "isAdvanced":false,
          "value": {
            "type": "first_name",
            "value": "Ron"
            }
          }
        expect(searchFunctionMock).toHaveBeenCalledWith(wantedResponse);
      });
    })
    describe('Advanced mode', () => {
      it('Should go to simple mode by change checkbox to false', () => {
        component = mountWithRouter(<Searcher search={() => {}} />);
        component.find('CheckBox[label="Advanced Search"]')
          .find("StyledCheck").simulate('change', {target: {checked: true}});
        component.find('CheckBox[label="Advanced Search"]')
          .find("StyledCheck").simulate('change', {target: {checked: false}});
        component.update();
        expect(component).toBeTruthy();
      });
      it('Should simulate an advanced query', () => {
        const searchFunctionMock = jest.fn();
        component = mountWithRouter(<Searcher search={searchFunctionMock} />);
        component.find('CheckBox[label="Advanced Search"]')
          .find("StyledCheck").simulate('change', {target: {checked: true}});
        component.find('RadioInput[value="M"]')
          .props().returnValue("M");
        component.find('CheckBox[test-key="first_name"]').props().toggle("first_name");
        component.find('TextInput[itemData="first_name"]')
          .find("StyledTextInput").simulate('change', {target: {value: "lamar"}});
        component.find('CustomButton[label="Search"]')
          .simulate("click");
        component.update();
        const wantedResponse = {
          "isAdvanced":true,
          "value": {
              "born_date": "",
              "default": "",
              "first_name": "lamar",
              "gender": "M",
              "last_name": "",
              "middle_name": "",
              "party": "",
            }
          }
        expect(searchFunctionMock).toHaveBeenCalledWith(wantedResponse);
      });
    })
  });
});

