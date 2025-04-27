let initState ={
  name: '一灯',
  description: '冲击3万'
}
export default function infoReducer(state, action) {
  if (!state) {
    state = initState;
  }
  switch(action.type) {
    case 'SET_NAME':
      return {
        ...state,
        count: action.name,
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        count: action.description,
      };
    default:
      return state;
  }
};
// 函数式编程里面
//   map是接收变形关系
//   reducer也是接受变形关系