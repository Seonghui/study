import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    counter: 1,
    error: false
  }

  //에러 캐치
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    // API를 통해서 서버로 오류 내용 전송하기
  }

  constructor(props) {
    // 컴포넌트가 원래 가지고 있던 생성자 함수를 호출하고
    // 우리가 하고 싶은 작업을 함
    super(props);
    console.log('constructor');
  }
  componentDidMount (){
    console.log('componentDidMount');
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>에러가 났어요</h1>
        </div>
      )
    }
    return (
      <div>
        {/* 10보다 작을 때만 나오게 */}
        {this.state.counter < 10 && <MyComponent value={this.state.counter} />}
        <button onClick={this.handleClick}>Click Me</button>
      </div>  
    );
  }
}

export default App;
