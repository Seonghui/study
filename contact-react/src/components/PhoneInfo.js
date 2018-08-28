//각 전화번호의 정보를 보내주는 컴포넌트
import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: { //info 의 default 값 설정
            name: '이름',
            phone: '010-1234-4567',
            id: 0
        }
    }

    state = {
        // 수정 버튼을 눌렀을 때 editing 값을 true 로 설정
        // 이 값이 true일 때는, 텍스트 형태가 input 형태로 보여지게 됨
        editing: false,
        // input의 값은 유동적. input값을 담기 위해서 필드 기본값 설정하기
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const { info, onRemove } = this.props; //삭제 버튼이 클릭되면
        onRemove(info.id); //onRemove에 id 넣어서 호출
    }

    //editing값을 반전시키는 함수
    //true -> false, false- > true
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    // input에서 onChange 이벤트가 발생될 때 호출되는 함수
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // editing 값이 바뀔 때 처리할 로직
        // 수정을 눌렀을 때는 기존의 값이 input에 나타나고
        // 수정을 적용할 때는 input의 값을 부모에게 전달

        const { info, onUpdate } = this.props;
        if (!prevState.editing && this.state.editing) {
            // editing 의 값이 false -> true로 전환될 때
            // info의 값을 state에 넣어 줌
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if (prevState.editing && !this.state.editing) {
            // editing값이 true -> false로 전환될 때
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        if (!this.state.editing
            && !nextState.editing  // 수정 상태가 아니고,
            && nextProps.info === this.props.info) { //info값이 같다면 리렌더링 안 함
            return false
        }
        //나머지 경우엔 리렌더링
        return true;
    }

    render() {
        console.log('render PhoneInfo ' + this.props.info.id);

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if (editing) { //수정모드
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        //일반모드
        const {
            name, phone
        } = this.props.info;  //info 라는 객체를 props 로 받아와서 렌더링

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;