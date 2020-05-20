import React, { useState } from 'react';
import './App.css';
import {buttonAction} from './Action';
import {connect} from 'react-redux';
import FieldLevelValidationForm from './ReduxFormValidation'


function submitHandle(values) {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

function App(props) {
  console.log(props.data)
  const [cartCount, setCartCount] = useState(0);

  function incrementClick() {
    setCartCount(cartCount + 1)
  }

  function decrementClick() {
    if(cartCount > 0) {
      setCartCount(cartCount - 1)
    }
  }

  return (
    <div className="App">
      <h3>Your Cart</h3>
      <button onClick={decrementClick}>-</button><button>{cartCount}</button><button onClick={incrementClick}>+</button>
      <button onClick={props.buttonAction}>PUTHUSUU</button>
      <FieldLevelValidationForm onSubmit = {submitHandle} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buttonAction: () => dispatch(buttonAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
