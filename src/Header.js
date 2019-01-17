import React, {Component} from 'react';

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                <h2>Test text!</h2>
            </header>
        );
    }
}

export default Header;