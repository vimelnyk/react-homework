import React from 'react';


export default class App extends React.Component {
  state = {
    isOpen: true
  }
  render(){
    const main = this.state.isOpen && <section>This is Main</section>
    return(
      <main>
        <button onClick={this.handleClick}>Click Me</button>
        {main}
      </main>
    )
  }
  handleClick = () => {
    this.setState({
        isOpen: !this.state.isOpen
      }
    )
  }
}