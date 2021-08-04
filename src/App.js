import React from 'react';
import './App.css';
import ReactDOM  from 'react-dom';
import Counter from './counter';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true,
      ignoreProps: 0,
      seed: 40
    }
    this.ignoreProps = () => this.setState({ignoreProps: Math.random()})
    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})
    this.seedGenerator =() => this.setState({seed: Number.parseInt(Math.random()*100)})
  }

  render() {
   return <div>
   <button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
   <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount</button>
  <button onClick={this.ignoreProps}> Ignore prop</button>
  <button onClick={this.seedGenerator}>Generate seed</button>
   {this.state.mount ?
   <Counter
   ignoreProps={this.state.ignoreProps}
     seed={this.state.seed}
   /> :
   null}
    </div>

  }
}

ReactDOM.render(<App />, document.getElementById("root"))