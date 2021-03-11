import React from 'react';
import _ from 'lodash';

import FormField from './FormField';

export default class FooterForm extends React.Component {
    render() {
        
        return (
            <section className="cell widget widget-form">              
              <h2 className="widget-title">Zapisz się</h2>              
              <form name="signup" id="signup" method="POST" action="/">                               
                <div className="form-row">
                  <FormField {...this.props} field={field} />
                </div>
                <div className="form-row">
                  <button type="submit" className="button">Zapisz się</button>
                </div>
              </form>
            </section>
        );
    }
}
