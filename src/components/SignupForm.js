import React from 'react';
import _ from 'lodash';

import FormField from './FormField';

export default class SignupForm extends React.Component {
    constructor(props) {
        this.state = {
            email: ""
        };
    }

    registerEmail(e) {
        e.preventDefault();
        console.log(e.target.value);
    };

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
        console.log(this.state);
    };

    render() {
        return (
            <section className="cell widget widget-form">
                <form name="signup" id="signup" method="POST" action="/" onSubmit={this.registerEmail.bind(this)}>
                    <div className="form-row">
                        <input
                            name="email"
                            type="email"
                            placeholder="Adres email"
                            value={this.state.email}
                            onChange={this.handleInputChange.bind(this)}
                            required />
                    </div>
                    <div className="form-row">
                        <button type="submit" className="button">Zapisz się</button>
                    </div>
                </form>
            </section>
        );
    }
}
