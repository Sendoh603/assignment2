import React from 'react';
import picture from './image/albums/twilight.jpeg';
import images from './image/avatars/wei.jpeg';

//this part is one of PostBody, click the up button to increse the voting counter through a handleClick function
//to reset state
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
          <a href='https://www.amazon.ca/Twilight-Thunder-God-Amon-Amarth/dp/B001CISHU4/ref=sr_1_1?keywords=amon+amarth+twilight+of+the+thunder+god&qid=1579888584&s=music&sr=1-1'>Twilight of the Thunder God</a>
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