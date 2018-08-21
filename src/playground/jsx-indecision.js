console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    // stops full page refresh.
    e.preventDefault();

    // grabs the value from the option input box. elements holds all of the items in the form.
    // option is the name given to the element. value is what's inside the box.
    const option = e.target.elements.option.value;

    // entering no text counts as undefined, so nothing will be added to the array.
    if(option) {
        // push option to the options array in the app object.
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
}

const clearOptions = () => {
    app.options = [];
    renderIndecisionApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    // JSX - Javascript XML
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearOptions}>Clear Options</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;    
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderIndecisionApp();