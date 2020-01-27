import React from 'react';
import picture from './image/albums/algorythm.jpeg';
import images from './image/avatars/wei.jpeg';
class PostBody extends React.Component {
  render () {

    return (
  
      <div id="box">

        <div id="leftContainer">
          <img src={picture} id="albumsPicture" alt="haha"/>
        </div>
  
        <div id="rightContainer">
  
          <button>counting</button>
          <div>Algorythm</div>
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

export default PostBody;