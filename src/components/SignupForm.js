import React from 'react';
import _ from 'lodash';

import FormField from './FormField';

export default class SignupForm extends React.Component {
    constructor(props) {
        this.state = {
            name: "",
            email: "",
            feedback: "",
        };
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }
};

render() {
    let state = {
        email: ""
    };

    let registerEmail = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    };

    let handleInputChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
        console.log(state);
    };

    return (
        <section className="cell widget widget-form">
            <form name="signup" id="signup" method="POST" action="/" onSubmit={registerEmail.bind(this)}>
                <div className="form-row">
                    <input name="email" type="email" placeholder="Adres email" onChange={handleInputChange.bind(this)} required />
                </div>
                <div className="form-row">
                    <button type="submit" className="button">Zapisz się</button>
                </div>
            </form>
        </section>
    );
}
}
