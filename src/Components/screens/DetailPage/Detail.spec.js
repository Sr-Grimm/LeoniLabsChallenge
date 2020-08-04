import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {useState, useEffect} from 'react';
import { waitForElement } from '@testing-library/react';
import DetailPage from './';
import fetchResult from '../../../utils/fetchResults';
import {
  BrowserRouter as Router,
} from "react-router-dom";

 
Enzyme.configure({ adapter: new Adapter() });

describe('<DetailPage />', () => {
  let component;

  const fetchMock = (error) => {
    if (error) {
      global.fetch = fetchResult.error
    } else {
      global.fetch = fetchResult.success
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
      component = await waitForElement(() => mountWithRouter(<DetailPage />));
      component.update();
      expect(component).toBeDefined()
    });
    it('Should create component with error', async () => {
      fetchMock(true)
      component = await waitForElement(() => mountWithRouter(<DetailPage />));
      await component.update();
      expect(component).toBeDefined()
    });
  });
});

