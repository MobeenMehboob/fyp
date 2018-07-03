import React, { Component } from 'react';



class Adminlogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      email: "",
      pass: ""
    }
  }




  // loginin(){
  //   // its admin login 
  // history.push()
  // }

  // handle(eve,target){

  //   let obj={};
  // obj[target]=eve.target.value;
  // console.log(obj)
  // this.setState(obj)

  // }

  signin() {
    let obj = {
      name: this.state.userName,
      email: this.state.email,
      pass: this.state.pass
    }
    this.props.signin(obj);
    console.log(obj);
  }



  render() {
    return (
      <div>
        <h1>admin login </h1>
        <input type="text"> admin name</input>
        <input type="text" onChange={(eve) => this.handle.bind(this)}  >admin emai</input>
        <input type="password" onChange={(eve) => this.bind(this)} >admin pass</input>
      </div>
    );
  }
}


export default Adminlogin;
