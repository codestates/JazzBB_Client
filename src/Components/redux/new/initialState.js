// import "/resource"
//"/resource/"
const initialState = {
  codeAction : false,
  isLogin: false,
  currentPage: '/service',
  history: [],
  firstCheck: false,
  search: null,
  searchOption: null,
  searchData: null,
  AllPage : true,
  user: {},
  modifyUser:{mobile : null, username: null, usertype: null},
  everyShowList : [],
  boardList: [{
    id: 4,
    user: null,
    title: "밥의 소개",
    content: `비밥의 등장은 1940년대 중반 스윙재즈의 매너리즘에서 벗어나고자 한 갈망을 시작으로 재즈의 이념이 ‘창의와 자유’로 굳어진 획기적인 역사적 사건이다. 악보를 보고 반복하는 스윙 빅밴드가 아닌 새로운 음악(형식)에 대한 열망이 가득한 연주자들이 주축이 된 재즈로 소규모 편성을 중심으로 연주자의 빠르고 현란한 독주와 긴장이 넘치는 연주가 비밥(Be Bob)이다. 비밥으로 인해 재즈는 대중들의 음악에서 연주자와 매니아들을 위한 예술적 음악으로 변화를 갖게 된다. 비밥(Be Bob)의 시작 비밥의 등장에는 여러 요인이 있는데, 미국의 세계대전 참전으로 규모가 큰 빅밴드 운영이 점점 어려워지면서 소규모 편성이 주목을 받게 되고, 이는 소규모 녹음을 주로 하는 독립 재즈음반사의 부흥으로 연결된다. 당연히 독립 음반사는 빅밴드보다 소규모 편성의 실험적인 비밥을 우선시 하게 되는데 이때 찰리 파커(Charlie Parker), 델로니어스 몽크(Thelonious Monk) 등이 각광을 받게 된다. 비밥은 1943년 뉴욕 할렘 118번가 민턴즈 플레이하우스에서 찰리 파커를 중심으로 한 애프터 아워즈 잼 세션(After Hours Jam Sessions)이 그 시작이다. 더 이상 재즈가 춤을 위한 반주 음악이 아닌 연주자 자신의 음악성을 표현하고 그 창조성을 극대화 시키는 음악이 된 것이다. 연주되는 곡들 또한 기존에 사랑 받던 유명 스탠더드에서 연주자들이 직접 만든 오리지널 곡 위주로 바뀌게 되는데 이렇게 아티스트 중심으로 흐르다 보니 편안하고 익숙한 음악에서 난해하고 감상 중심 음악으로 이동해 대중들과 멀어지게 된다.                        비밥은 1943년 뉴욕 할렘 118번가 민턴즈 플레이하우스에서 찰리 파커를 중심으로 한 애프터 아워즈 잼 세션(After Hours Jam Sessions)이 그 시작이다. 더 이상 재즈가 춤을 위한 반주 음악이 아닌 연주자 자신의 음악성을 표현하고 그 창조성을 극대화 시키는 음악이 된 것이다. 연주되는 곡들 또한 기존에 사랑 받던 유명 스탠더드에서 연주자들이 직접 만든 오리지널 곡 위주로 바뀌게 되는데 이렇게 아티스트 중심으로 흐르다 보니 편안하고 익숙한 음악에서 난해하고 감상 중심 음악으로 이동해 대중들과 멀어지게 된다.그리고 비밥 곡들은 전체적으로 템포가 빨라지고 연주자의 현란한 솔로 즉흥연주가 중시되는데 그래서 ‘클래식은 작곡가의 음악’, ‘재즈는 연주자의 음악’이란 말이 나오게 된 것이다. 대신 재즈 매니아들이 생겨나, 특히 유럽으로 이주한 미국의 재즈인들로 인해 유럽재즈가 본격적인 궤도에 오르게 된다. 연주자들도 경직된 연주에서 힘을 조금 빼고 자신의 음악 만들기에 열정적으로 도전하게 된다. ‘버드’라는 애칭을 가진 자유로운 영혼의 찰리 파커를 시작으로 디지 길레스피(Dizzy Gillespie)와 버드 파웰(Bud Powell) 등 지금도 재즈의 대표하는 연주자들이 이때 등장한다.하드밥(Hard Bob)의 사운드하드밥(Hard Bob)은 비밥의 전통을 계승하며 보다 어둡고 열정적인 사운드를 보여준 모던 재즈의 대표 장르로 흑인의 특유의 블루스와 가스펠 성향이 짙고 멜로디 라인이 선명한 특징을 가지고 있다. 어감상으로는 비밥보다 어려운 것 같지만 하드밥의 멜로디와 사운드, 그리고 녹음은 매우 우수해 모던재즈 감상의 시작으로 안성맞춤이다. 하드밥은 전체적으로 사운드가 뜨거워 ‘핫 재즈’라고도 하고, 미 동부(필라델피아와 디트로이트) 출신의 흑인들이 중심이어서 ‘이스트 코스트 재즈(East Cost Jazz)’라고도 한다. 특히 존 콜트레인(John Coltrane)과 소니 롤린스(Sonny Rollins)라는 두 라이벌이 등장해 명반과 명연을 많이 남기게 되고, 리 모건(Lee Morgan), 허비 행콕(Herbie Hancock), 아트 블레이키(Art Blakey) 등이 하드밥의 리더로 후대에까지 지대한 영향을 미친다. 하드밥(Hard Bob)은 비밥의 전통을 계승하며 보다 어둡고 열정적인 사운드를 보여준 모던 재즈의 대표 장르로 흑인의 특유의 블루스와 가스펠 성향이 짙고 멜로디 라인이 선명한 특징을 가지고 있다. 어감상으로는 비밥보다 어려운 것 같지만 하드밥의 멜로디와 사운드, 그리고 녹음은 매우 우수해 모던재즈 감상의 시작으로 안성맞춤이다. 하드밥은 전체적으로 사운드가 뜨거워 ‘핫 재즈’라고도 하고, 미 동부(필라델피아와 디트로이트) 출신의 흑인들이 중심이어서 ‘이스트 코스트 재즈(East Cost Jazz)’라고도 한다. 특히 존 콜트레인(John Coltrane)과 소니 롤린스(Sonny Rollins)라는 두 라이벌이 등장해 명반과 명연을 많이 남기게 되고, 리 모건(Lee Morgan), 허비 행콕(Herbie Hancock), 아트 블레이키(Art Blakey) 등이 하드밥의 리더로 후대에까지 지대한 영향을 미친다.포스트밥(Post Bob)시기상 퓨전 재즈가 유행한 후 등장하게 되는 포스트밥은 1980년대 포스트모던 시대에 등장한 모던재즈를 일컫는 말이다. 포스트 밥은 신 전통주의, 네오 밥(Neo Bob) 등 여러 스타일로 혼용되기도 하는데 60년대 말부터 전개된 일렉트릭 퓨전재즈에 대항해 재즈의 고전이라 할 수 있는 모던재즈(비밥, 하드밥)를 새롭게 시도하고 연주하는 것을 말한다. 그 중심에는 모던재즈의 마지막 직계인 트럼펫터 윈튼 마살리스(Wynton Marsalis)가 있는데 그는 타고난 천재성으로 살아있는 재즈의 전설들과 함께 모던재즈의 붐을 다시 일으킨다. 이후 그는 스윙 빅밴드까지 구사하면서 흑인만이 구사할 수 있는 재즈의 아이덴티티를 확립하는데 힘을 쏟는다. 정리하면 지금 연주되는 모던재즈 스타일의 재즈는 거의 포스트 밥, 포스트 하드밥으로 구분되며 시대가 흐르면서 컨템포러리 재즈, 작가주의 재즈 등 여러 용어로 스타일이 세포분열하고 있다.`,
    thumbnail: "/resource/service-banner-middle.png"
  }],
  currentBoard: null,
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
    {
      num: "01",
      name: "김수황",
      mobile: "010-000-0000",
      people: "03",
      confirm: "pending",
      show: {
        date: "2021-07-01",
        currentSeat : 3,
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
        date: "2021-07-01",
        time: "20:30-21:30",
        currentSeat : 3,
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
        currentSeat : 3,
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
        currentSeat : 3,
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
        currentSeat : 3,
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
        currentSeat : 3,
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
  barList: [
    {
      id: 6,
      barName: '디스플레이재즈바',
      moblie: '010-9663-1278',
      defaultSeat: '16',
      area: '부산 부산진구',
      thumbnail: '/resource/디스플레이재즈바.png',
      address: '부산 부산진구 신천대로50번길 62',
      rating: '4.5',
      serviceOption: '3579',
      openTime: '17:00-23:00',
      gpsX: '129.051',
      gpsY: '35.218',
    },{
      id: 7,
      barName: '초능력',
      moblie: '010-5423-8441',
      defaultSeat: '20',
      area: '부산 부산진구',
      thumbnail: '/resource/초능력.png',
      address: '부산 부산진구 서전로10번길 38 3층 초능력',
      rating: '4',
      serviceOption: '1246',
      openTime: '17:00-20:00',
      gpsX: '129.059', 
      gpsY: '35.156',
    },{
      id: 8,
      barName: '재즈클럽 몽크',
      moblie: '051-622-2212',
      defaultSeat: '20',
      area: '부산 남구',
      thumbnail: '/resource/배너교체1.png',
      address: '부산 남구 용소로19번길 25 태양빌딩 지하 1F',
      rating: '4.5',
      serviceOption: '1246',
      openTime: '18:30-23:00',
      gpsX: '129.101',
      gpsY: '35.142',
    },{
      id: 9,
      barName: '겟올라잇',
      moblie: '051-743-2002',
      defaultSeat: '20',
      area: '서울 서초구',
      thumbnail: '/resource/배너교체1.png',
      address: '서울 서초구 서초동 몇번지',
      rating: '4.5',
      serviceOption: '1246',
      openTime: '17:00-22:00',
      gpsX: '129.164',
      gpsY: '35.165',
    },{
      id: 10,
      barName: '루이암스트롱재즈바',
      moblie: '052-267-0636',
      defaultSeat: '20',
      area: '울산 남구',
      thumbnail: '/resource/배너교체1.png',
      address: '울산 남구 중앙로 281',
      rating: '4.5',
      serviceOption: '1246',
      openTime: '17:00-21:00',
      gpsX: '129.309',
      gpsY: '35.545',
    },
  ],
jazzBarId : 1,
jazzbar : [],
  // jazzbar: {
  //   id: 1,
  //   barName: '개쩌는 쟤즈뺘',
  //   mobile: '02-123-4567',
  //   defaultSeat: '20',
  //   area: '서울 서초구',
  //   thumbnail: ['public/img/resource/newres_vinga.jpeg'],
  //   address: '서울 강남구 강남대로 708 (한남대교레인보우카폐) 3층',
  //   addressFront :'서울 강남구 강남대로 708 (한남대교레인보우카폐)',
  //   addressETC : '3층',
  //   rating: '4.5',
  //   serviceOption: '1234',
  //   openTime: '17:00-20:00',
  //   gpsX: 127.10676860117488,
  //   gpsY: 37.365264512305174,
  // }, //selected

  barPhoto: [],
  reviewList: [],//{}
  myReviewId: null,
  menu: [
    {
      thumbnail: '/resource/newres_vinga.jpeg'
    },
    {
      thumbnail: '/resource/newres_allthatjazz.jpeg'
    },
    {
      thumbnail: '/resource/newres_key1.jpeg'
    },
    {
      thumbnail: '/resource/newres-tokyojazz.jpeg'
    },
    {
      thumbnail: '/resource/newres_allthatjazz.jpeg'
    },
  ],
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
    loginModal: false,
    user: false,
    withdrawModal: false,
    withdrawConfirm: false,
    moreInfo : false,
  },

  
  // 추후 추가 혹은 안쓰는 state의 경우 삭제
};

export default initialState;
