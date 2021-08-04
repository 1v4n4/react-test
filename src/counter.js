import React from 'react';
import './App.css';

const ErrorComponent = () => <div>{props.nonexisting}</div>

export default class Counter extends React.Component {
  constructor (props) {
    console.log('Constructor')
    super(props)
    this.state = {
      counter: 0,
      seed: 0
    }
    this.increment = () => this.setState({counter: this.state.counter+1})
    this.decrement = () => this.setState({counter: this.state.counter-1})
  }

  componentDidMount() {
    console.log("didMount");
    console.log("-----------");
  }

  static getDerivedStateFromProps(props, state) {
    if(props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
    return null
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should update?');
    if (nextProps.ignoreProps &&
      this.props.ignoreProps !== nextProps.ignoreProps){
      console.log("should not update")
      return false;
    }
    console.log('should update')
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  }

  render () {
    console.log('Render')
    return <div>
    <button onClick={this.increment}></button>
    <button onClick={this.decrement}></button>
      <div className='counter'>
        Counter: {this.state.counter}
      </div>
      <ErrorComponent />
    </div>
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('DidUpdate')
    console.log('++++++++++++++++++++')
  }

  componentWillUnmount() {
    console.log("did unmount");
    console.log("-----------");
  }


componentDidCatch(error, info) {
  console.log('Component did catch')
}
}
