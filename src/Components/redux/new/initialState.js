const initialState = {
  user: {
    isLogin: false, // 로그인 상태 확인
    token: null, // 토큰 저장
    dbUserId: null, // reservation등 userId 필요한 작업
    username: null, // 회원정보 수정
    mobile: null, // 회원정보 수정, reservation
    userThumbnail: null, // 회원정보 수정 초기 값 더미데이터 있으면 좋을듯
    usertype: null, // 사장님인지 확인
    jazzbarId: null, // 사장님인 경우 사용 or 재즈바 선택시 사용
  },
  board: {
    boardId: null, // 게시글 수정, 삭제, 댓글 CRUD시 사용 가능
    boardTitle: null, // 게시글 CRUD
    boardContent: null, // 게시글 CRUD
  },
  review: {
    content: null, // 댓글 CRUD
    point: null, // 댓글 CRUD
  },

 
  BossShowList: [
    {
      id: "01",
      jazzbarId: "01",
      date: "2021-07-01",
      time: "15:30-17:30",
      player: [
        {
          position : "singer",
          name: "서지민",
        },
        {
          position : "piano",
          name: "김수황",
        },
        {
          position : "base",
          name: "rlaxots",
        },
        {
          position : "trumpet",
          name: "성준락",
        },
      ],
      thumbnail: "",
      content: "blahblahblah",
      showCharge: "20000",
    },
    {
      id: "02",
      jazzbarId: "01",
      date: "2021-07-03",
      time: "19:30-21:30",
      player: [
        {
          position : "singer",
          name: "서지민",
        },
        {
          position : "piano",
          name: "김수황",
        },
        {
          position : "base",
          name: "rlaxots",
        },
        {
          position : "trumpet",
          name: "성준락",
        },
      ],
      thumbnail: "",
      content: "blahblahblah",
      showCharge: "20000",
    },
    {
      id: "03",
      jazzbarId: "01",
      date: "2021-07-04",
      time: "17:30-19:30",
      player: [
        {
          position : "singer",
          name: "서지민",
        },
        {
          position : "piano",
          name: "김수황",
        },
        {
          position : "base",
          name: "rlaxots",
        },
        {
          position : "trumpet",
          name: "성준락",
        },
      ],
      thumbnail: "",
      content: "Ariana GrandeTell me something I need to knowThen take my breath and never let it goIf you just let me invade your spaceIll take this pleasure, take it with the painAnd if in the moment I bite my lipLove me, love me, love ",
      showCharge: "20000",
    },
    {
      id: "04",
      jazzbarId: "01",
      date: "2021-07-10",
      time: "17:30-19:30",
      player: [
        {
          position : "singer",
          name: "서지민",
        },
        {
          position : "piano",
          name: "김수황",
        },
        {
          position : "base",
          name: "rlaxots",
        },
        {
          position : "trumpet",
          name: "성준락",
        },
      ],
      thumbnail: "",
      content: "Ariana GrandeTell me something I need to knowThen take my breath and never let it goIf you just let me invade your spaceIll take this pleasure, take it with the painAnd if in the moment I bite my lipLove me, love me, love ",
      showCharge: "20000",
    },
    {
      id: "05",
      jazzbarId: "01",
      date: "2021-07-19",
      time: "17:30-19:30",
      player: [
        {
          position : "singer",
          name: "서지민",
        },
        {
          position : "piano",
          name: "김수황",
        },
        {
          position : "base",
          name: "rlaxots",
        },
        {
          position : "trumpet",
          name: "성준락",
        },
      ],
        
    
      thumbnail: "",
      content: "Ariana GrandeTell me something I need to knowThen take my breath and never let it goIf you just let me invade your spaceIll take this pleasure, take it with the painAnd if in the moment I bite my lipLove me, love me, love ",
      showCharge: "20000",
    },
  ],
  boss: {
    date: new Date(),
  },
  reservation: [
    //boss reservation
    {
      num: "01",
      name: "김수황",
      tel: "010-000-0000",
      psn: "03",
      status: "승인",
      jazzbarId: "01",
      date: "2021-07-01",
      time: "17:30-19:30",
    },
    {
      num: "02",
      name: "서지민",
      tel: "010-000-0000",
      psn: "03",
      status: "거절",
      jazzbarId: "01",
      date: "2021-07-02",
      time: "19:30-21:30",
    },
    {
      num: "03",
      name: "성준락",
      tel: "010-000-0000",
      psn: "03",
      status: "대기",
      jazzbarId: "01",
      date: "2021-07-03",
      time: "17:30-19:30",
    },
    {
      num: "04",
      name: "김태선",
      tel: "010-000-0000",
      psn: "02",
      status: "승인",
      jazzbarId: "01",
      date: "2021-06-30",
      time: "19:30-21:30",
    },
    {
      num: "05",
      name: "김수황",
      tel: "010-000-0000",
      psn: "05",
      status: "거절",
      jazzbarId: "01",
      date: "2021-07-01",
      time: "20:30-21:30",
    },
    {
      num: "06",
      name: "김수황",
      tel: "010-000-0000",
      psn: "06",
      status: "대기",
      jazzbarId: "01",
      date: "2021-07-02",
      time: "17:30-19:30",
    },
  ],
  barList: [], //전체 재즈바 리스트
  jazzbar: null, //selected
  barPhoto: [],
  reviewList: [],//{}
  myReviewId: null,
  menu: [],
  showList: [],
  show: null,
  serviceOption: [
    {
      id: '1',
      img: './resource/icons/parking.png',
      content: '주차가능'
    },
    {
      id: '2',
      img: './resource/icons/vallet.png',
      content: '발렛주차'
    },
    {
      id: '3',
      img: './resource/icons/group.png', //'13'
      content: '단체석'
    },
    {
      id: '4',
      img: './resource/icons/room.png',
      content: '개별룸'
    },
    {
      id: '5',
      img: './resource/icons/dinner.png',
      content: '식사가능'
    },
    {
      id: '6',
      img: './resource/icons/corkage.png',
      content: '콜키지가능'
    },
    {
      id: '7',
      img: './resource/icons/night.png',
      content: '심야영업'
    },
    {
      id: '8',
      img: './resource/icons/onlinebook.png',
      content: '온라인예약'
    },
  ],
  notice: [
    '공연 시작 10분 전에 자리해주세요.',
    '화장실이나 기타 용무는 공연 전후로 마무리 해주시는 것이 좋습니다.',
    '공연자에 대한 예의로, 공연 중 자리를 뜨지 않는 것이 좋습니다.',
    '예약 승인 후 예약 취소 없이 방문하지 않는 노쇼(No-Show) 행위가 반복될 경우 예약이 거절되거나 시스템 이용이 정지될 수 있습니다.',
  ],
  togle: {
    reviewModify: false,
    reviewDelete: false,
  }
  // 추후 추가 혹은 안쓰는 state의 경우 삭제
};

export default initialState;
