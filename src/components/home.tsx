import * as React from 'react';
import Banner from './banner';
import About from './about';
import Features from './features';
import Inception from './inception';
import Contact from './contact';
import Screens from './screens';

class Home extends React.Component<any, any> {
  render() {
    return (
      <div className="Home">
        <Banner />
        <About />
        <Features />
        <Inception />
        <Screens />
        <Contact />
      </div>
    );
  }
}

export default Home;
