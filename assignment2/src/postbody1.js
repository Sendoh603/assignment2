import React from 'react';
import picture from './image/albums/algorythm.jpeg';
import images from './image/avatars/wei.jpeg';

//this part is one of PostBody, click the up button to increse the voting counter through a handleClick function
//to reset state
class PostBody1 extends React.Component {
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
          <a href='https://www.amazon.ca/Algorythm-Beyond-Creation/dp/B07G2DLVGY/ref=sr_1_1?qid=1579888556&refinements=p_32%3ABeyond+Creation&s=music&sr=1-1'>Algorythm</a>
          <div>Beyond Creation, 2018</div>
          <div>
            Submitted by:
            <img src={images} id="submmittedPicture" alt="haha"/>
          </div>
  
        </div>
      
      </div>
        
    );
  }
}

export default PostBody1;