import React, { Component } from 'react';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => { //이벤트가 발생하면
        this.setState({
            [e.target.name]: e.target.value //이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어옴
        });
    }
    handleSubmit = (e) => { // submit 이 발생하면
        e.preventDefault(); //페이지 리로딩 방지
        this.props.onCreate(this.state); //props 로 받은 함수를 호출
        this.setState({ //상태 초기화
            name: '',
            phone: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name" //name 값 부여
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm;