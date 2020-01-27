import React from 'react';
import Header from './header.js';
import PostBody from './postbody.js';


  
class Root extends React.Component {
  render () {

    return (
      <div>
      <Header />
      <PostBody />
      </div>
    );
  }
}

export default Root;