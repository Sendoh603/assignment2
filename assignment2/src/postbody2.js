import React from 'react';
import picture from './image/albums/archspire.jpeg';
import images from './image/avatars/wei.jpeg';

//this part is one of PostBody, click the up button to increse the voting counter through a handleClick function
//to reset state
class PostBody2 extends React.Component {
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
          <a href='https://www.amazon.ca/Relentless-Mutation-Archspire/dp/B073VGQDMW/ref=sr_1_1?gclid=Cj0KCQiAyKrxBRDHARIsAKCzn8zuXLaa8qcSJtAkJevPnqr-jfgWUkp2O71rTORgj6QBHIF5YqJsccQaAtbsEALw_wcB&hvadid=312011771255&hvdev=c&hvlocphy=9001172&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=6466900384173491050&hvtargid=kwd-383797004860&hydadcr=23336_10308585&keywords=relentless+mutation&qid=1579888461&sr=8-1'>Relentless Mutation</a>
          <div>Archspire, 2017</div>
          <div>
            Submitted by:
            <img src={images} id="submmittedPicture" alt="haha"/>
          </div>
  
        </div>
      
      </div>
        
    );
  }
}

export default PostBody2;