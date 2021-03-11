/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        <React.Fragment>         
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XGP4576NPQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XGP4576NPQ');
</script>
        </React.Fragment>
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={withPrefix('js/plugins.js')}/>
            <script src={withPrefix('js/init.js')}/>
            <script src={withPrefix('js/main.js')}/>
            
        </React.Fragment>
    ]);

};
