import * as React from 'react';
import {Route} from 'react-router-dom'
import Home from '../home'
import Faqs from '../faqs'
import Privacy from '../privacy'
import Terms from '../terms'
import Support from '../support'

class Main extends React.Component<any, any> {
  render() {
    return (
      <main className="Main">
          <Route exact path="/" component={Home} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/faqs" component={Faqs} />
          <Route exact path="/privacy-policy" component={Privacy} />
          <Route exact path="/terms-and-conditions" component={Terms} />
      </main>
    );
  }
}

export default Main;
