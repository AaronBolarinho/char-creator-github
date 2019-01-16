var React = require('react');
var ReactDOM = require('react-dom');

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
}

class StupidStatement extends React.Component {
    render() {
        return (
            <p>See javascript is {this.props.descriptor}!</p>
        );
    }
}

class MainPane extends React.Component {
    render() {
        const statements = this.props.descriptors.map((descriptor) =>
            <StupidStatement descriptor={descriptor}/>
        );
        return (
            <div>{statements}</div>
        );
    }
}

class App extends React.Component {
    render() {
        const descriptors = [
		"easy", 
		"fun", 
		"full of semicolons", 
		"good at being associated wih java",
		"bad at having a loveable package manager"
	]
        return (
            <div>
                <Header title="Baby's first react app"/>
                <MainPane descriptors={descriptors}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
