const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const containerEl = document.getElementById("container");
const addEl = document.getElementById("add");

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
});

addEl.addEventListener("click", function () {
  const newEl = ` <div class="max-w-md mx-auto mt-10 space-y-5" >
                <div
                    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
 
                    <div class="text-2xl font-semibold" id="counter"></div>
                    <div class="flex space-x-3">
                        
 
                     
                    <div class="flex space-x-3">
                        <button
                            class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment"
 
                        >
                            Increment
                        </button>
                        <button
 
                        id="decrement"
                            class="bg-red-400 text-white px-3 py-2 rounded shadow"
 
                            class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement"

                        >
                            Decrement
                        </button>
                    </div>
                </div>
                
            </div>
        </div>`;
  

  containerEl.innerHTML += newEl;
});
