import React from 'react';

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ""
        };
    }

    registerEmail(e) {
        e.preventDefault();
        console.log(this.state.email);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key'
            },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
        const data = await response.json();
        this.setState({ postId: data.id });
    };

    handleInputChange(e) {
        e.preventDefault();

        if (!this.state)
            return;

        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
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
