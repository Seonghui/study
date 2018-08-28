import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList'

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-1234-4567'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-4567-7892'
      }
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }

  handleCreate = (data) => { //메소드 생성
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => { // id를 파라메터로 받아오는 함수
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data를 덮어 씀
          : info // 기존의 값을 그대로 유지
      )
    })
  }
  render() {
    const { information, keyword } = this.state;
    const filterList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm //PhoneForm에 전달
          onCreate={this.handleCreate} 
        />
        <p>
          <input
            placeholder="검색할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr/>
        <PhoneInfoList //PhoneInfoList로 전달
          data={filterList}
          onRemove={this.handleRemove} 
          onUpdate={this.handleUpdate} 
        />
      </div>
    );
  }
}

export default App;
