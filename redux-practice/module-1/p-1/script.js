const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");
const INCREMENT = "increment";
const DECREMENT = "decrement";
const initialState = {
  value: 0,
};

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        value: state.value + action.payload,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        value: state.value - action.payload,
      };
    }
    default:
      return state;
  }
}

const store = Redux.createStore(counterReducer);
const render = () => {
  const state = store.getState();
  counterEl.innerHTML = state.value;
};
render();
store.subscribe(render);
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(3));
});
