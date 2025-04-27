export default function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state;
  }
};
// 函数式编程里面
//   map是接收变形关系
//   reducer也是接受变形关系