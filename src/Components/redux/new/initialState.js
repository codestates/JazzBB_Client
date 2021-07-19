const initialState = {
  codeAction : false,
  isLogin: true,
  currentPage: '/service',
  history: [],
  firstCheck: false,
  token: false,
  search: null,
  searchOption: null,
  searchData: null,
  AllPage : true,
  user: {
    id: '',
    userId: '',
    username: '',
    mobile: '',
    usertype: false,
  },
  modifyUser:{mobile : null, username: null, usertype: null},
  everyShowList : [
  ],
  boardList: [],
  currentJazzbar: "",

  currentBoard: "",
  review: null,

  BossShowList: [
    {
      id: "01",
      jazzbarId: "01",
      date: "2021-07-23",
      time: "17:30-19:30",
      player: [
        {
          position : "singer",
          name: "이명환",
        },
        {
          position : "piano",
          name: "노진혁",
        },
        {
          position : "base",
          name: "이현곤",
        },
        {
          position : "trumpet",
          name: "강진성",
        },
      ],
      thumbnail: "",
      content: "보컬, 피아노, 베이스, 트럼펫으로 구성된 환상적인 쿼텟의 연주를 감상하러 오세요. 재즈 맨즈의 진수를 보여드립니다.",
      showCharge: "10000",
    },
    {
      id: "02",
      jazzbarId: "01",
      date: "2021-07-24",
      time: "20:30-21:30",
      player: [
        {
          position : "piano",
          name: "윤형배",
        },
        {
          position : "base",
          name: "김동건",
        },
        {
          position : "drum",
          name: "조영훈",
        },
      ],
      thumbnail: "",
      content: "재즈 트리오를 소개합니다. 우리 재즈 트리오는 피아노, 베이스, 드럼으로 이루어져 있습니다. 재즈 중에서도 비밥위주로 연주를 합니다. 아름다운 연주와 함께 즐거운 재즈의 정취를 느껴보시기 바랍니다. ",
      showCharge: "8000",
    },
    {
      id: "03",
      jazzbarId: "01",
      date: "2021-07-23",
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
      date: "2021-07-25",
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
      date: "2021-07-23",
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
bossJazzBar :[],

  reservation: [
    //boss reservation
    // {
    //   num: "01",
    //   name: "김수황",
    //   mobile: "010-000-0000",
    //   people: "03",
    //   confirm: "pending",
    //   show: {
    //     date: "2021-07-01",
    //     currentSeat : 3,
    //     time: "17:30-19:30",
    //     jazzbar: {
    //       id: 3,
    //       barName: "개쩔껄 재즈바",
    //       mobile: "010-4234-5312",
    //       defaultSeat: "350",
    //       area: "오산",
    //       thumbnail: "saljknaslk",
    //       address: "경기 오산시 고길동 지민로 44",
    //       rating: "4",
    //       serviceOption: "1456",
    //       openTime: "17:00-17:01",
    //       gpsX: "126.34",
    //       gpsY: "38"
    //     },

    //   }
    // },
    // {
    //   num: "02",
    //   name: "서지민",
    //   mobile: "010-000-0000",
    //   people: "03",
    //   confirm: "denied",
    //   show: {
    //     date: "2021-07-01",
    //     time: "20:30-21:30",
    //     currentSeat : 3,
    //     jazzbar: {
    //       id: 3,
    //       barName: "개쩔껄 재즈바",
    //       mobile: "010-4234-5312",
    //       defaultSeat: "350",
    //       area: "오산",
    //       thumbnail: "saljknaslk",
    //       address: "경기 오산시 고길동 지민로 44",
    //       rating: "4",
    //       serviceOption: "1456",
    //       openTime: "17:00-17:01",
    //       gpsX: "126.34",
    //       gpsY: "38"
    //     },

    //   }
    // },
    // {
    //   num: "03",
    //   name: "성준락",
    //   mobile: "010-000-0000",
    //   people: "03",
    //   confirm: "confirm",
    //   show: {
    //     date: "2021-07-03",
    //     time: "17:30-19:30",
    //     currentSeat : 3,
    //     jazzbar: {
    //       id: 3,
    //       barName: "개쩔껄 재즈바",
    //       mobile: "010-4234-5312",
    //       defaultSeat: "350",
    //       area: "오산",
    //       thumbnail: "saljknaslk",
    //       address: "경기 오산시 고길동 지민로 44",
    //       rating: "4",
    //       serviceOption: "1456",
    //       openTime: "17:00-17:01",
    //       gpsX: "126.34",
    //       gpsY: "38"
    //     },

    //   }
    // },
    // {
    //   num: "04",
    //   name: "김태선",
    //   mobile: "010-000-0000",
    //   people: "02",
    //   confirm: "pending",
    //   show: {
    //     date: "2021-06-30",
    //     time: "19:30-21:30",
    //     currentSeat : 3,
    //     jazzbar: {
    //       id: 3,
    //       barName: "개쩔껄 재즈바",
    //       mobile: "010-4234-5312",
    //       defaultSeat: "350",
    //       area: "오산",
    //       thumbnail: "saljknaslk",
    //       address: "경기 오산시 고길동 지민로 44",
    //       rating: "4",
    //       serviceOption: "1456",
    //       openTime: "17:00-17:01",
    //       gpsX: "126.34",
    //       gpsY: "38"
    //     },

    //   }
    // },
    // {
    //   num: "05",
    //   name: "김수황",
    //   mobile: "010-000-0000",
    //   people: "05",
    //   confirm: "pending",
    //   show: {
    //     date: "2021-07-01",
    //     time: "20:30-21:30",
    //     currentSeat : 3,
    //     jazzbar: {
    //       id: 3,
    //       barName: "개쩔껄 재즈바",
    //       mobile: "010-4234-5312",
    //       defaultSeat: "350",
    //       area: "오산",
    //       thumbnail: "saljknaslk",
    //       address: "경기 오산시 고길동 지민로 44",
    //       rating: "4",
    //       serviceOption: "1456",
    //       openTime: "17:00-17:01",
    //       gpsX: "126.34",
    //       gpsY: "38"
    //     },

    //   }
    // },
    // {
    //   num: "06",
    //   name: "김수황",
    //   mobile: "010-000-0000",
    //   people: "06",
    //   confirm: "pending",
    //   show: {
    //     date: "2021-07-02",
    //     time: "17:30-19:30",
    //     currentSeat : 3,
    //     jazzbar: {
    //       id: 3,
    //       barName: "개쩔껄 재즈바",
    //       mobile: "010-4234-5312",
    //       defaultSeat: "350",
    //       area: "오산",
    //       thumbnail: "saljknaslk",
    //       address: "경기 오산시 고길동 지민로 44",
    //       rating: "4",
    //       serviceOption: "1456",
    //       openTime: "17:00-17:01",
    //       gpsX: "126.34",
    //       gpsY: "38"
    //     },


    //   }
    // },
  ],
  barList: [],
jazzBarId : 1,
  jazzbar: {
          id: 3,
          barName: "개쩔껄 재즈바",
          mobile: "010-4234-5312",
          defaultSeat: "350",
          area: "오산",
          thumbnail: "saljknaslk",
          address: "경기 오산시 고길동 지민로 44",
          rating: "4",
          serviceOption: "1456",
          openTime: "17:00-17:01",
          gpsX: "126.34",
          gpsY: "38"
        },

  barPhoto: [],
  reviewList: [{
    boardId: 1,
    content: "뭐야 이 병신은",
    createdAt: "2021-07-19T00:00:00.000Z",
    id: 1,
    jazzbarId: null,
    point: "5",
    updatedAt: "2021-07-19T00:00:00.000Z",
    user:{
      createdAt: "2021-07-19T05:01:42.000Z",
      id: 1,
      jazzbarId: null,
      mobile: "01077912745",
      thumbnail: "http://k.kakaocdn.net/dn/iMNbx/btq4ty8czvh/3PHK4K0oyO4XBYQ35JwfN1/img_110x110.jpg",
      updatedAt: "2021-07-19T14:24:01.000Z",
      userId: "1811785024",
      username: "태선",
      usertype: "customer",
    }
  }],
  myReviewId: null,
  menu: [],
  showList: [],
  show: {
    id: null,
    time: null,
    date: null,
    player: null,
    thumbnail: null,
    content: null,
    showCharge: null,
    currentSeat : null,
  },
  people: null,
  serviceOption: [
    {
      id: '1',
      img: '/resource/parking.png',
      content: '주차가능'
    },
    {
      id: '2',
      img: '/resource/vallet.png',
      content: '발렛주차'
    },
    {
      id: '3',
      img: '/resource/group.png', //'13'
      content: '단체석'
    },
    {
      id: '4',
      img: '/resource/room.png',
      content: '개별룸'
    },
    {
      id: '5',
      img: '/resource/dinner.png',
      content: '식사가능'
    },
    {
      id: '6',
      img: '/resource/corkage.png',
      content: '콜키지가능'
    },
    {
      id: '7',
      img: '/resource/night.png',
      content: '심야영업'
    },
    {
      id: '8',
      img: '/resource/onlinebook.png',
      content: '온라인예약'
    },
  ],
  notice: [
    '공연 시작 10분 전에 자리에 착석해주세요.',
    '화장실이나 기타 용무는 공연 전후로 마무리 해주시는 것이 좋습니다.',
    '공연자에 대한 예의로, 공연 중 자리를 뜨지 않는 것이 좋습니다.',
    '예약 승인 후 예약 취소 없이 방문하지 않는 노쇼(No-Show) 행위가 반복될 경우 예약이 거절되거나 시스템 이용이 정지될 수 있습니다.',
  ],
  togle: {
    reviewModify: false,
    reviewDelete: false,
    menuModal: false,
    boardModal: false,
    loginModal: false,
    user: false,
    withdrawModal: false,
    withdrawConfirm: false,
    moreInfo : false,
    bossModal: false,
  },

  
  // 추후 추가 혹은 안쓰는 state의 경우 삭제
};

export default initialState;