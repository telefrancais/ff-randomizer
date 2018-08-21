class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: []
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({options: options}));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

// stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

// creates default prop if one isn't provided.
Header.defaultProps = {
    title: 'Indecision'
};

// stateless functional component
const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >What should I do?</button>
        </div>
    );
}

// stateless functional component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            {props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)}
        </div>
    );
}

// stateless functional component
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}>Remove</button>
        </div>
    ); 
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: undefined
        }

        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        // stops full page refresh.
        e.preventDefault();

        // grabs the value from the option input box. elements holds all of the items in the form.
        // option is the name given to the element. value is what's inside the box.
        const option = e.target.elements.option.value.trim();

        // entering no text counts as undefined, so nothing will be added to the array.
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error: error}));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}

// stateless functional component
// faster than state based components, easier to test and read and write.
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));