import React from 'react';
import picture from './image/albums/redcloud.jpeg';
import images from './image/avatars/wei.jpeg';

//this part is one of PostBody, click the up button to increse the voting counter through a handleClick function
//to reset state
class PostBody3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter:0, 
      add () {
        return this.counter + 1;
      }
    }
  }
  handleClick() {
    let afterPlusNumber = this.state.add();
    this.setState({counter:afterPlusNumber});
  }
  render () {

    return (
  
      <div id="box">

        <div id="leftContainer">
          <img src={picture} id="albumsPicture" alt="haha"/>
        </div>
  
        <div id="rightContainer">
  
          <button onClick={() =>this.handleClick()}>UP {this.state.counter}</button>
          <div>Under the Red Cloud</div>
          <div>Amorphis, 2015</div>
          <div>
            Submitted by:
            <img src={images} id="submmittedPicture" alt="haha"/>
          </div>
  
        </div>
      
      </div>
        
    );
  }
}

export default PostBody3;