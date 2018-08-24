import React, { Component } from 'react';

class MyComponent extends Component {
    state = {
        value: 0
    };
    static getDerivedStateFromProps(nextProps, prevState) {
        // nextProps: 다음으로 받아올 props 값
        // prevState: 업데이트 되기 전의 props 값
        if(prevState.value !== nextProps.value) {
            return {
                value: nextProps.value
            }
        }
        return null; //아무것도 변경하지 않음
    }

    shouldComponentUpdate(nextProps, nextState) {
        // true일때는 렌더O, false일때는 렌더X
        if(nextProps.value === 10) return false; //Props가 10일 때 렌더가 안 됨
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.value !== prevProps.value) {
            console.log("value 값이 바뀌었다!: ", this.props.value);
        }
    }

    componentWillUnmount () {
        console.log('Good Bye');
    }

    render() {
        return (
            <div>
                {/* {this.props.missing.something} */}
                <p>props: {this.props.value}</p>
                <p>state: {this.state.value}</p>
            </div>
        )
    }
    
}

export default MyComponent;