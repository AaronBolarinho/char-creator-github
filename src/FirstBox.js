import React, {Component} from 'react';
import '../styles/FirstBox.css';

class FirstBox extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }
    render() {
        return (
            <div>
            <p className={styles.FirstBox}>Test text First Box!</p>
            </div>
        );
    }
}

export default FirstBox;