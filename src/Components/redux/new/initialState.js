// import "../../../../public/resource"

const initialState = {
  user: {
    isLogin: false, // 로그인 상태 확인
    token: null, // 토큰 저장
    id: null, // db식별 id
    userId: "taeseon1997",
    username: '김태선', // 회원정보 수정
    mobile: '010-2345-4142', // 회원정보 수정, reservation
    thumbnail: null, // 회원정보 수정 초기 값 더미데이터 있으면 좋을듯
    usertype: null, // 사장님인지 확인
    jazzbarId: null, // 사장님인 경우 사용 or 재즈바 선택시 사용
  },
  boardList: [],
  currentBoard: {
    boardId: null, // 게시글 수정, 삭제, 댓글 CRUD시 사용 가능
    boardThumbnail: null,
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
      mobile: "010-000-0000",
      people: "03",
      confirm: "pending",
      show: {
        date: "2021-07-01",
        time: "17:30-19:30",
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

      }
    },
    {
      num: "02",
      name: "서지민",
      mobile: "010-000-0000",
      people: "03",
      confirm: "denied",
      show: {
        date: "2021-07-02",
        time: "19:30-21:30",
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

      }
    },
    {
      num: "03",
      name: "성준락",
      mobile: "010-000-0000",
      people: "03",
      confirm: "confirm",
      show: {
        date: "2021-07-03",
        time: "17:30-19:30",
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

      }
    },
    {
      num: "04",
      name: "김태선",
      mobile: "010-000-0000",
      people: "02",
      confirm: "pending",
      show: {
        date: "2021-06-30",
        time: "19:30-21:30",
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

      }
    },
    {
      num: "05",
      name: "김수황",
      mobile: "010-000-0000",
      people: "05",
      confirm: "pending",
      show: {
        date: "2021-07-01",
        time: "20:30-21:30",
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

      }
    },
    {
      num: "06",
      name: "김수황",
      mobile: "010-000-0000",
      people: "06",
      confirm: "pending",
      show: {
        date: "2021-07-02",
        time: "17:30-19:30",
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

      }
    },
  ],
  barList: [],
  jazzbar: {
    id: 1,
    barName: '개쩌는 쟤즈뺘',
    moblie: '02-123-4567',
    defaultSeat: '20',
    area: '서울 서초구',
    thumbnail: 'sdfds',
    address: '서울 서초구 서초동 몇번지',
    rating: '4.5',
    serviceOption: '1246',
    openTime: '17:00-20:00',
    gpsX: null,
    gpsY: null,
  }, //selected
  barPhoto: [],
  reviewList: [],//{}
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
    showCharge: null
  },
  people: null,
  serviceOption: [
    {
      id: '1',
      img: '../../../../public/resource/icon/parking.png',
      content: '주차가능'
    },
    {
      id: '2',
      img: '../../../../public/resource/icon/vallet.png',
      content: '발렛주차'
    },
    {
      id: '3',
      img: '../../../../public/resource/icon/group.png', //'13'
      content: '단체석'
    },
    {
      id: '4',
      img: '../../../../public/resource/icon/room.png',
      content: '개별룸'
    },
    {
      id: '5',
      img: '../../../../public/resource/icon/dinner.png',
      content: '식사가능'
    },
    {
      id: '6',
      img: '../../../../public/resource/icon/corkage.png',
      content: '콜키지가능'
    },
    {
      id: '7',
      img: '../../../../public/resource/icon/night.png',
      content: '심야영업'
    },
    {
      id: '8',
      img: '../../../../public/resource/icon/onlinebook.png',
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
    menuModal: false,
    boardModal: false,
    username: false,
    mobile: false,
  }
  // 추후 추가 혹은 안쓰는 state의 경우 삭제
};

export default initialState;
