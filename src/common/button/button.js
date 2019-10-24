import React from 'react';

const Button = (props) => {
        return (
            <div>
            <button onClick={props.getStart}>REDUX JOPA</button>
                <div>{ String(props.state.start) }</div>
            </div>
        )

}

export default React.memo(Button);