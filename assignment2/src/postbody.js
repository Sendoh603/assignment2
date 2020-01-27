import React from 'react';

class PostBody extends React.Component {
  render () {

    return (
  
      <div id="box">

        <div id="leftContainer">
          <img src="./image/albums/algorythm.jpeg" id="albumsPicture">
        </div>
  
        <div id="rightContainer">
  
          <button>counting</button>
          <div>Algorythm</div>
          <div>Beyond Creation, 2018</div>
          <div>
            Submitted by:
            <img src="./image/avatars/wei.jpeg" id="submmittedPicture">
          </div>
  
        </div>
      
      </div>
        
    );
  }
}

export default PostBody;