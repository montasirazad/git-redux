const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
 
const containerEl = document.getElementById("container");
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
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
};

const store = Redux.createStore(counterReducer);
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};
render();
store.subscribe(render);
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(3));
})

let count = 0;

incrementEl.addEventListener("click", () => {
  count++;
  counterEl.innerText = count;
});

decrementEl.addEventListener("click", () => {
  count--;
  counterEl.innerText = count;
 
});
