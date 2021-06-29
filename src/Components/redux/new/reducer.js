import { SET_TOKEN } from './action';
import {CHANGE_DATE} from './types'

export const initialState = {
    user: {
        isLogin: false, // 로그인 상태 확인
	    token: null, // 토큰 저장
        dbUserId: null, // reservation등 userId 필요한 작업
        username: null, // 회원정보 수정
        mobile: null, // 회원정보 수정, reservation
        userThumbnail: null, // 회원정보 수정 초기 값 더미데이터 있으면 좋을듯
        usertype: null, // 사장님인지 확인 
        jazzbarId: null, // 사장님인 경우 사용
    },
    board: {
        boardId: null, // 게시글 수정, 삭제, 댓글 CRUD시 사용 가능
        boardTitle: null, // 게시글 CRUD
        boardContent: null // 게시글 CRUD
    },
    review: {
        reviewId: null, // 댓글 수정, 삭제시 사용가능
        title: null, // 댓글 CRUD
        content: null // 댓글 CRUD
    },
    // 추후 추가 혹은 안쓰는 state의 경우 삭제
};

const ChangeDatereducer = (state=initialState, action) => {
    const payload = action.payload;
    switch(action.type){
        case CHANGE_DATE:
            return{
                ...state,
                subscribers : state.subscribers +1
            }
        case SET_TOKEN:
            return Object.assign({}, state, {user: {...state.user, payload}})
        default : return state;
    }
}

   export default ChangeDatereducer