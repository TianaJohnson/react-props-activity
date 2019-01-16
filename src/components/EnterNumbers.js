import React, { Component } from 'react';
// buttons are not actually working, come back to this
class EnterNumbers extends Component {
    construct( ){
        super();
        this.state = {
            inputNumber: '',
        }
    }

    numberChange = (event) => {
        this.inputNumber
    }

    render() {
        return (
            <div className="enterNum">
            <form onSubmit>
                <button className="up-btn">Up!</button>
                <input type="text"/>
                <button className="dwn-btn">Down!</button>
            </form>
            </div>
        );
    }
}
export default EnterNumbers;