import React, {Component} from 'react';

class StupidStatement extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }
    render() {
        return (
            <p>See javascript is super duper test text {this.props.descriptor}!</p>
        );
    }
}

export default StupidStatement;