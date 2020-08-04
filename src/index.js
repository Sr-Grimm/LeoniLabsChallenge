import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const index = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

try {
    index()
} catch{
    //pass
}

export default index;