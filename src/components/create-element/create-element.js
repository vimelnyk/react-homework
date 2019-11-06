import React from 'react';


export default class CreateElement extends  React.Component {
  render(){
    return(
      React.createElement('h1', {}, 'My First React Code')
    )
  }
}