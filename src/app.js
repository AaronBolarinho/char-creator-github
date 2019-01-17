import StupidStatement from './StupidStatement.js';
import Header from './Header.js';
import MainPane from './MainPane.js';
import FirstBox from './FirstBox.js';
var React = require('react');
var ReactDOM = require('react-dom');

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
                <FirstBox/>
            </div>
        );
    }
}
export default App;

ReactDOM.render(<App/>, document.getElementById("app"));


// This is the original code for three componants that were placed here originally.
//  I have now seperated each componant into its seperate page; and tested it so that it works.
//  I am leaving this code here for now; whoever wrote it here originally (Duncan)?
// can get rid of it once they are satisfied with the transfer.
//
// --------------------------------------
// class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <h1>{this.props.title}</h1>
//             </header>
//         );
//     }
// }

// class StupidStatement extends React.Component {
//     render() {
//         return (
//             <p>See javascript is super duper {this.props.descriptor}!</p>
//         );
//     }
// }

// class MainPane extends React.Component {
//     render() {
//         const statements = this.props.descriptors.map((descriptor) =>
//             <StupidStatement descriptor={descriptor}/>
//         );
//         return (
//             <div>{statements}</div>
//         );
//     }
// }
// --------------------------------------