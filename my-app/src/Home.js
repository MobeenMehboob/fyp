import React, { Component } from 'react';
import History from './History';
import {link} from 'react-router-dom'

import background from './image/wall.jpg'
class Home extends Component {
    backButton = () => {
        History.push('/components/admin/adminpanal')
    }
    render() {

var   sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { background } + ")"
};



              <h1>  <link to="'/components/admin/adminpanal'"> admin login</link> </h1>
        return (
            <div style={ sectionStyle }>
                <h1>Home</h1>
                <button onClick={this.backButton}>Back</button>
            </div>
        )
    }
}

export default Home;