import React from 'react';
import citations from '../citations';
import Citation from './Citation';

class App extends React.Component {

  state = {};

  componentWillMount(){
    this.genererCitation();
  }

  genererCitation = event => {
    //array des citations
    const keyArray = Object.keys(citations);
    // console.log(keyArray);
    //une citation au hasard
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    // console.log(randomKey);
    if (this.state.citation === citations[randomKey].citation){
      this.genererCitation();
      return;
    }
    this.setState(citations[randomKey]);
  };

  render(){
    return(
      <div>
        <Citation details={this.state}/>
        <button onClick={e => this.genererCitation(e)} >Une autre citation!</button>
      </div>
    )
  }
}

export default App;
