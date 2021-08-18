const initialState = {
  codeAction : false,
  isLogin: false,
  currentPage: '/service',
  history: [],
  search: null,
  searchOption: '/searchJazzbar',
  searchData: null,
  AllPage : true,
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
bossReservation:[],
reservation: [
  ],
  barList: [],
jazzBarId : null,
  jazzbar: {},

  barPhoto: [],
  reviewList: [],
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
      content: '개별룸' //1234 
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
};

export default initialState;