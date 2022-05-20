require('file-loader?name=[name].[ext]!../index.html');
//import React from 'react';
//import ReactDOM from 'react-dom';
//import { App } from './App';
import '../css/style.scss';
//
//const appElement = document.getElementById('app');
//
//ReactDOM.render(<App />, appElement);

//import Title from './components/Title';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {version: React.version};
  }

  
  render() {
    return (
      <div className="page-wrap">
        {/* <Title>React Version: {this.state.version}</Title> */}
        <h1>Hello there {new Date().toDateString()}</h1>
    	</div>
    )
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
