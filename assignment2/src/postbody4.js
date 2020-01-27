import React from 'react';
import picture from './image/albums/twilight.jpeg';
import images from './image/avatars/wei.jpeg';
class PostBody4 extends React.Component {
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
          <div>Twilight of the Thunder God</div>
          <div>Amon Amarth, 2008</div>
          <div>
            Submitted by:
            <img src={images} id="submmittedPicture" alt="haha"/>
          </div>
  
        </div>
      
      </div>
        
    );
  }
}

export default PostBody4;