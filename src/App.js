import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Snacks from './components/Snacks'
import AddSnack from './components/AddSnack'
import ShowSnack from './components/ShowSnack'

// const Home = () => (
//   <div>
//     <Snacks />
//   </div>
// )

// const About = () => (
//   <div>
//     <AddSnack />
//   </div>
// )

const Code = () => (
  <div>
    Code
  </div>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

const info = () => (
  <div>
    info
  </div>
)

const MainMenu = (props) => {
  return (
    <div>
      <Link to="/">
        <button>Snacks</button>
      </Link>
      <Link to="/about">
        <button>Add Snack</button>
      </Link>
      <Link to="/code">
        <button>Find a new snack</button>
      </Link>
      <Link to="/code">
        <button>Stuff</button>
      </Link>
      <Link to="/info">
        <button>Info</button>
      </Link>
    </div>
  )
}



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snacks: ''
    }
  }

  async componentDidMount() {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const response = await fetch(proxy + 'https://enigmatic-lake-76965.herokuapp.com/snacks')
    const json = await response.json()
    this.setState({ snacks: json.data })
    console.log(this.state.snacks)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <MainMenu snacks={this.state.snacks} />
          </header>
          <div>
            <Route exact path="/" component={() => <Snacks snacks={this.state.snacks} />} />
            {/* <Route path="/people" component={() => <People ={this.state.thing}/> }/>  */}
            <Route exact path="/about" render={() => <AddSnack />} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/info" component={info} />
            <Route exact path="/id/:id" component={(props) => <ShowSnack snacks={this.state.snacks} {...props} />} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
