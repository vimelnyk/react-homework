import React from 'react';
import CreateElement from '../create-element';
import Main from '../main';


export default class App extends React.Component {
  render(){
    return(
      <>
      <CreateElement/>
      <Main/>
      </>
    )
  }
}