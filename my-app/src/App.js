import React, { Component } from 'react';
import Routers from './route';
import logo from './logo.svg';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

 

  render() {
 


 
 
    return (
      <div  >
          
      

        <MuiThemeProvider>
          <Routers />
        </MuiThemeProvider>



        <h1>HERE IS ARE FRAMING APP </h1>

      </div>
    );
  }
}

export default App;
