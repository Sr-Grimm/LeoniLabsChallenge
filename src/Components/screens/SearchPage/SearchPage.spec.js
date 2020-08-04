import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {useState, useEffect} from 'react';
import { waitForElement } from '@testing-library/react';
import SearchPage from './';
import fetchResult from '../../../utils/fetchResults';
import {
  BrowserRouter as Router,
} from "react-router-dom";

 
Enzyme.configure({ adapter: new Adapter() });

describe('<SearchPage />', () => {
  let component;

  const fetchMock = (error) => {
    if (error) {
      global.fetch = fetchResult.error
    } else {
      global.fetch = fetchResult.successAll
    }
  }

  const mountWithRouter = (component) => {
    return mount(
      <Router>
        {component}
      </Router>
    );
  };

  describe('Render', () => {
    it('Should create component with success', async () => {
      fetchMock(false)
      component = await waitForElement(() => mountWithRouter(<SearchPage />));
      component.update();
      expect(component).toBeDefined()
    });
    it('Should create component with error', async () => {
      fetchMock(true)
      component = await waitForElement(() => mountWithRouter(<SearchPage />));
      await component.update();
      expect(component).toBeDefined()
    });
  });
  describe('Functional', () => {
    it('Should display alert if param type is default', async () => {
      const mockAlert = jest.fn()
      global.alert = mockAlert
      fetchMock(false)
      component = await waitForElement(() => mountWithRouter(<SearchPage />));
      component.update();
      component.find("Searcher").props().search({
        value: {
          type: "default"
        }
      })
      expect(mockAlert).toHaveBeenCalled()
    })
  });
});

