import React from 'react';
import { render } from 'react-dom';
import './css/style.css';

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import SaveTheDate from './components/SaveTheDate';

class App extends React.Component{
  render(){
    return(
      <div className='bodify-body'>
        <Banner />
        <Navbar />
        <SaveTheDate />
      </div>
    )
  }
}

render(<App/>, document.querySelector('#main'));
