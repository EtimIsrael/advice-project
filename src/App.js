import React from 'react';
import axios from 'axios';

import './App.css';


class App extends React.Component {
  // State is like global object that contains all the important things
  state = { advice: ''};

  // Where and how are we going to call our request to get the API. We use a componentDidMount() because every component goes through a life cycle.
  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const {advice} = response.data.slip;

        this.setState({ advice });
        // console.log(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { advice } = this.state;

    return (
      <div className='app'>
        <div className='card'>
          <h2 className='heading'>{advice}</h2>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;