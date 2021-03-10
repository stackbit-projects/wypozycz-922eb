import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import FooterForm from './FooterForm';

export default class SectionCta extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block cta-block bg-accent outer">
              <div className="inner-large">
                <div className="grid">
                  <div className="cell block-content">
                    {_.get(section, 'title', null) && (
                    <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                    )}
                    {_.get(section, 'subtitle', null) && (
                    <p className="block-copy">
                      {htmlToReact(_.get(section, 'subtitle', null))}
                    </p>
                    )}
                  </div>                 
                  <div className="cell block-buttons">                    
                    <FooterForm {...this.props} />
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
