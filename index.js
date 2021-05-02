// the same as: import redux from 'redux' but here is just a node application so use this bellow:
const redux = require('redux');
const createStore = redux.createStore;


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First Redux Action'
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM
  }
}

// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }

    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }

    default: return state
  }
}

// Holds application state
const store = createStore(reducer);
// Allows access to state via getState()
console.log('Initial state', store.getState());
// Registers listeners via subscribe(listener) 
// and Handles unregistering of listeners via the function returned by subscribe(listener)
const unsubscribe = store.subscribe(() => console.log('Update State', store.getState()));
// Allows state to be updated via dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
