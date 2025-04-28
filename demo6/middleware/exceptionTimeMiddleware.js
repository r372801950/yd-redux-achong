const exceptionTimeMiddleware = store => next => action => {
  try{
    next(action);
  }catch(error){
    console.error('错误报告', error)
  }
};
export default exceptionTimeMiddleware;