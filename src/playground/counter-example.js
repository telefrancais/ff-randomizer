class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({ counter: count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.counter !== this.state.counter) {
            localStorage.setItem('count', this.state.counter);
        }
    }

    addOne() {
        this.setState((prevState) => {
            return {counter: prevState.counter + 1};
        });
    }

    minusOne() {
        this.setState((prevState) => {
            return {counter: prevState.counter - 1};
        });
    }

    reset() {
        this.setState(() => {
            return {counter: 0};
        });
    }

    render () {
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const user = {
//     name: 'Ryan',
//     age: 32,
//     location: 'Toronto'
// }

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }

// const templateTwo = (
//     <div>
//         {/* ternary operator, when you want to do one of two things */}
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {/* conditional and operator, when you want to do one or else do nothing at all */}
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {/* function call, when you want more options  */}
//         {getLocation(user.location)}
//     </div>
// );

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();