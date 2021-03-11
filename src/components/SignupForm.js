import React from 'react';
import _ from 'lodash';

import FormField from './FormField';

export default class SignupForm extends React.Component {
    render() {
        let self=this;
        let field = {
            name: "email",
            default_value: "Email",
            input_type: "text",
            is_required: true,
        };        

        var registerEmail = (e) => {

         };

        return (
            <section className="cell widget widget-form">
                <form name="signup" id="signup" method="POST" action="/" onSubmit={self.registerEmail.bind(this)}>
                    <div className="form-row">
                        <FormField field={field} />
                    </div>
                    <div className="form-row">
                        <button type="submit" className="button">Zapisz się</button>
                    </div>
                </form>
            </section>
        );
    }
}
