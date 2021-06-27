// // // import { configureStore } from '@reduxjs/toolkit';
// // // import counterReducer from '../features/counter/counterSlice';

// // import { INIT_COUNT_STATUS } from './state'
// // import { INCREMENT, DECREMENT } from './action';
// // import { combineReducers } from 'redux';

// // const store = createStore(reducer, initState)

// // function counter (state = INIT_COUNT_STATUS, action) {
// //   switch(action.type) {
// //       case INCREMENT:
// //           return {
// //               ...state,
// //               value: state.value + 1
// //           }
// //       case DECREMENT:
// //           return {
// //               ...state,
// //               value: state.value - 1
// //           }
// //       default:
// //           return state
// //   }
// // }

// // const counterReducer = combineReducers({ counter });



// // export default counterReducer


// const { createStore } = require('redux'); 
// // 2. 초기 state를 정의한다. 
// const initState = { name: '김코딩', posts: [] } 
// // action // 3. 객체를 리턴하는 action creator 함수를 작성한다. 
// const changeUsername = (data) => { return { type: 'CHANGE_NAME', data } } 
// const addPost = (post) => { return { type: 'ADD_POST', post } } 
// // reducer // 5. action 의 타입에 따라서 새로운 state를 생성해내는 순수 함수를 생성한다. 
// const reducer = (prevState, action) => { switch (action.type) { case 'CHANGE_NAME': return { ...prevState, name: action.data } case 'ADD_POST': return { ...prevState, posts: [...prevState.posts, action.post] } default: return prevState } } 
// // 1. store를 생성한다. const store = createStore(reducer, initState) 
// // 4. dispatch : Action을 전달하는 메소드다. 
// // dispatch의 전달인자로 Action 객체가 전달되고, 
// // Reducer를 호출해 state의 값을 바꾸는 역할을 한다. 
// store.dispatch(changeUsername('코드스테이츠')) 
// store.dispatch(addPost('post 1')) 
// store.dispatch(addPost('post 2')) 
// console.log(store.getState());

