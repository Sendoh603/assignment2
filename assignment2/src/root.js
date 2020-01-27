import React from 'react';
import Header from './header.js';
import PostBody1 from './postbody1.js';
import PostBody2 from './postbody2.js';
import PostBody3 from './postbody3.js';
import PostBody4 from './postbody4.js';


  
class Root extends React.Component {
constructor(props) {
  super(props)
  this.state = { 
    post:[<PostBody1 counter={this.props.counter}/>,<PostBody2 counter={this.props.counter}/>,<PostBody3 counter={this.props.counter}/>,<PostBody4 counter={this.props.counter}/>],

  }
  this.renderPostBody = this.renderPostBody.bind(this);
}
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