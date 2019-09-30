import React from 'react';
import SearchUI from './SearchUI';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  scrollToProducts(){
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: 'smooth'
    });
  }
  render(){
    return(
      <div>
        <Router>
        <Switch>
         <Route path="/" exact component={SearchUI}/>
        </Switch>
        </Router>
      </div>
    )

  }
}
export default App;

