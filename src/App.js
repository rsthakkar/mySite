// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

class App extends React.Component {

  render() {
    return (
     	<div>
			<Header/>
			<Body/>
		</div>
    );
  }
} 

export default App;
