class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetails: false
        };

        this.onShowDetails = this.onShowDetails.bind(this);
    }

    onShowDetails() {
        this.setState((prevState) => {
            return {showDetails: !prevState.showDetails}
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1> 
                <button onClick={this.onShowDetails}>{this.state.showDetails ? 'Hide Details' : 'Show Details'}</button>
                {this.state.showDetails && <p>Here is some text.</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let showDetails = false;

// const appRoot = document.getElementById('app');

// const onShowDetails = () => {
//     // sets showDetails to the opposite of what it is.
//     showDetails = !showDetails;
//     render();
// }

// const render = () => {
//     // JSX - Javascript XML
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1> 
//             <button onClick={onShowDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
//             {showDetails && <p>Here is some text.</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();