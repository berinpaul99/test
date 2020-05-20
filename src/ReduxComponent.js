import React, {useState} from 'react';
import { ButtonAction } from './Actions/ButtonAction'
import { connect } from 'react-redux';

export function ReduxComponent(props) {
    console.log(props.secretName)
    const [name, setName] = useState('')
    console.log(name)
    return (
        <div>
            <p>Trigger an action</p>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => props.ButtonAction(name)}>Button</button>
            <p>secret name is {props.secretName}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        secretName: state.Reducer.secretName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ButtonAction: (name) => dispatch(ButtonAction(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
