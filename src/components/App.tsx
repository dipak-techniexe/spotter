import * as React from 'react';
import '../sass/custom.scss'
import Header from './comman/Header'
import Main from './comman/Main'
import Footer from './comman/Footer'

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
