import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import FormField from './FormField';

export default class FooterForm extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="cell widget widget-form">              
              <h2 className="widget-title">Zapisz się</h2>              
              <form name="signup" id="signup" method="POST" action="/">               
                <input aria-labelledby={_.get(section, 'form_id', null) + '-honeypot-label'} type="hidden" name="form-name"
                  value={_.get(section, 'form_id', null)} />
                {_.map(_.get(section, 'form_fields', null), (field, field_idx) => (
                <div key={field_idx} className="form-row">
                  <FormField {...this.props} field={field} />
                </div>
                ))}
                <div className="form-row">
                  <button type="submit" className="button">{_.get(section, 'submit_label', null)}</button>
                </div>
              </form>
            </section>
        );
    }
}
