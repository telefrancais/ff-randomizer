import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
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
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className= "add-option__input" type="text" name="option" />
                    <button className="button">Add Team</button>
                </form>
            </div>
        );
    }
}