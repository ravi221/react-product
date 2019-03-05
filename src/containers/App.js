import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/header';

class App extends Component {

  state = {
    isOpen : false
  }

  toggleDropdownMenu = () => {
    this.setState({isOpen : !this.state.isOpen})
  }

  render() {
    return (
      <div>
        <Header openDropdown={this.state.isOpen} clicked={this.toggleDropdownMenu} />
      </div>
    );
  }
}

export default App;
