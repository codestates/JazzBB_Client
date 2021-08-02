const ResetState = {
    codeAction : false,
    isLogin: false,
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
        player: {"piano":"sdf","drum":"sd"},
        thumbnail: "",
        content: "보컬, 피아노, 베이스, 트럼펫으로 구성된 환상적인 쿼텟의 연주를 감상하러 오세요. 재즈 맨즈의 진수를 보여드립니다.",
        showCharge: "10000",
      },
    ],
    boss: {
      date: new Date(),
    },
  bossJazzBar :[],
  reservation: [
      
    ],
    barList: [],
  jazzBarId : null,
    jazzbar: {
            // id: 1,
            // barName: "개쩔껄 재즈바",
            // mobile: "010-4234-5312",
            // defaultSeat: "350",
            // area: "오산",
            // thumbnail: null,
            // address: "경기 오산시 고길동 지민로 44",
            // rating: "4",
            // serviceOption: "1456",
            // openTime: "17:00-17:01",
            // gpsX: "126.34",
            // gpsY: "38"
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
    reser : 'ya'
  
    
    // 추후 추가 혹은 안쓰는 state의 경우 삭제
  };
  
  export default ResetState;