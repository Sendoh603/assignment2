import React from 'react';
import Header from './header.js';
import PostBody1 from './postbody1.js';
import PostBody2 from './postbody2.js';
import PostBody3 from './postbody3.js';
import PostBody4 from './postbody4.js';

//there are two components under "root" tag - Header and PostBody
//under PostBody component, there are four components - PostBody1, PostBody2, PostBody3, and PostBody4
//each PostBody display one album
//I put the four PostBodys in an array in the state, I want to compare each PostBody's counter and 
//make a right order from high counter to low counter, then put the array of components into PostBody component

class Root extends React.Component {
constructor(props) {
  super(props)
  this.state = { 
    post:[<PostBody1 counter={this.props.counter}/>,<PostBody2 counter={this.props.counter}/>,<PostBody3 counter={this.props.counter}/>,<PostBody4 counter={this.props.counter}/>],

  }
  this.renderPostBody = this.renderPostBody.bind(this);
}

//this is the coding for comparing the voting counter, the higher one appears in the top of the PostBody component
renderPostBody () {
  let max
  for (let i = 0; i < this.state.post.length; i++) {
    for (let j = i; j < this.state.post.length; j++) {
      if (this.state.post[i].counter < this.state.post[j].counter) {
        this.state.post[j] = this.state.post[i]
        this.state.post[i] = max
      }
    }
  }
  this.setState({post:this.state.post});
}

//this function above does not work, so I put in a button, but it still does not work
  render () {
    return (
      <div>
      <Header />
      {this.state.post}
      <button onClick={()=>this.renderPostBody()}>sumbit</button>
      </div>
    );
  }
}

export default Root;