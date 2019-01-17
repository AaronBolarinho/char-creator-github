import React, {Component} from 'react';
import StupidStatement from './StupidStatement.js';

class MainPane extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }
    render() {
        const statements = this.props.descriptors.map((descriptor) =>
            <StupidStatement descriptor={descriptor}/>
        );
        return (
            <div>{statements}</div>
            // <p>Test text Main pane!</p>
        );
    }
}

export default MainPane;
