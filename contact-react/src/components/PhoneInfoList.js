//여러개의 PhoneInfo 컴포넌트들을 보여줌
import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = { //디폴트 설정
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('render Phoneinfolist');
        const { data, onRemove, onUpdate } = this.props; //data라는 배열을 가져옴, onRemove 전달
        const list = data.map( // map을 통해서 JSX 로 변환
            info => (
            <PhoneInfo
                key={info.id}
                info={info}
                onRemove={onRemove}
                onUpdate={onUpdate}
            />) // key는 리액트에서 배열을 렌더랑할 때 꼭 필요한 값임
        );

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList;