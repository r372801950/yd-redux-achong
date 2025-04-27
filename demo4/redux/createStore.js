
export default function createStore(reducer, initialState) {
  let state = initialState || {};
  let listeners = [];
  function subscribe(listener) {
    listeners.push(listener);
  }
  function getState() {
    return state;
  }

  function dispatch(action) {
    // 函数式编程里面函子的概念，action就是变形关系，state就是value，返回了一个新的state，没对老东西本体改变
    // state = newState;
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }
  // dispatch({type:Symbol()});
  return {
    subscribe,
    getState,
    dispatch
  }
}