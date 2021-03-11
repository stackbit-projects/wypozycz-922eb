import React from 'react';
import _ from 'lodash';

import FormField from './FormField';

export default class SignupForm extends React.Component {
    render() {
        let self = this;
        let field = {
            name: "email",
            placeholder: "Email",
            value: "s"
        };

        let registerEmail = (e) => {
            e.preventDefault();
            console.log(field);
        };

        return (
            <section className="cell widget widget-form">
                <form name="signup" id="signup" method="POST" action="/" onSubmit={registerEmail.bind(this)}>
                    <div className="form-row">
                        <input name={field.name} type={field.name} value={field.value} placeholder={field.placeholder} required />
                    </div>
                    <div className="form-row">
                        <button type="submit" className="button">Zapisz się</button>
                    </div>
                </form>
            </section>
        );
    }
}
