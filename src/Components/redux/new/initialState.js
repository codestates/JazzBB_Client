// import "/resource"
//"/resource/"
const initialState = {
  codeAction : false,
  isLogin: true,
  currentPage: '/service',
  history: [],
  firstCheck: false,
  search: null,
  searchOption: null,
  searchData: null,
  AllPage : true,
  user: {
    id: 1,
    userId: 'kimcoding@codestates.com',
    username: '김코딩',
    mobile: '010-1234-5678',
    usertype: 'boss'
  },
  modifyUser:{mobile : null, username: null, usertype: null},
  everyShowList : [

    {
      id: 1,
      jazzbarId:5,
      time: '19:00',
      date: '2021-07-19',
      player: '김태선재즈퀄텟',
      thumbnail: '/resource/jimin.png',
      content: 'spain, yatra-ta, misty 등 역병의 주요 곡을 연주해 드립니다',
      showCharge: '20000',
      currentSeat : 23,
    }, {
      id: 2,
      jazzbarId:5,
      time: '22:00',
      date: '2021-07-19',
      player: '서지민트리오',
      thumbnail: '/resource/jimin2.png',
      content: '그대의 눈동자에 cheers',
      showCharge: '20000',
      currentSeat : 15,
    }, {
      id: 3,
      jazzbarId:2,
      time: '23:00',
      date: '2021-07-19',
      player: '김수황재즈듀오',
      thumbnail: '/resource/conflict.png',
      content: '마이시퀄의 따듯한 세계에서 멀터의 늪까지',
      showCharge: '20000',
      currentSeat : 33,
    }, {
      id: 4,
      jazzbarId:1,
      time: '18:30',
      date: '2021-07-19',
      player: '김인기코드빅밴드',
      thumbnail: '/resource/error.png',
      content: '그 의지라면 관람할 수 있습니다',
      showCharge: '20000',
      currentSeat : 23,
    }, {
      id: 5,
      jazzbarId:3,
      time: '20:20',
      date: '2021-07-19',
      player: '김홍식핑크재즈',
      thumbnail: '/resource/why500.png',
      content: '새로운 재즈의 세계에 빠져보세요',
      showCharge: '20000',
      currentSeat : 15,
    }, {
      id: 6,
      jazzbarId:4,
      time: '21:00',
      date: '2021-07-19',
      player: '이호용트리오',
      thumbnail: '/resource/dead.png',
      content: '재즈 입문의 가이드가 되어 드리겠습니다',
      showCharge: '20000',
      currentSeat : 33,
    }, {
      id: 7,
      jazzbarId:5,
      time: '23:00',
      date: '2021-07-19',
      player: '민철재즈베이비',
      thumbnail: '/resource/rightnow.png',
      content: '떠오르는 신인',
      showCharge: '20000',
      currentSeat : 33,
    }


  ],
  boardList: [
    {
    id: 0,
    user: null,
    title: "밥의 소개",
    content: `비밥의 등장은 1940년대 중반 스윙재즈의 매너리즘에서 벗어나고자 한 갈망을 시작으로 재즈의 이념이 ‘창의와 자유’로 굳어진 획기적인 역사적 사건이다. 악보를 보고 반복하는 스윙 빅밴드가 아닌 새로운 음악(형식)에 대한 열망이 가득한 연주자들이 주축이 된 재즈로 소규모 편성을 중심으로 연주자의 빠르고 현란한 독주와 긴장이 넘치는 연주가 비밥(Be Bob)이다. 비밥으로 인해 재즈는 대중들의 음악에서 연주자와 매니아들을 위한 예술적 음악으로 변화를 갖게 된다. 비밥(Be Bob)의 시작 비밥의 등장에는 여러 요인이 있는데, 미국의 세계대전 참전으로 규모가 큰 빅밴드 운영이 점점 어려워지면서 소규모 편성이 주목을 받게 되고, 이는 소규모 녹음을 주로 하는 독립 재즈음반사의 부흥으로 연결된다. 당연히 독립 음반사는 빅밴드보다 소규모 편성의 실험적인 비밥을 우선시 하게 되는데 이때 찰리 파커(Charlie Parker), 델로니어스 몽크(Thelonious Monk) 등이 각광을 받게 된다. 비밥은 1943년 뉴욕 할렘 118번가 민턴즈 플레이하우스에서 찰리 파커를 중심으로 한 애프터 아워즈 잼 세션(After Hours Jam Sessions)이 그 시작이다. 더 이상 재즈가 춤을 위한 반주 음악이 아닌 연주자 자신의 음악성을 표현하고 그 창조성을 극대화 시키는 음악이 된 것이다. 연주되는 곡들 또한 기존에 사랑 받던 유명 스탠더드에서 연주자들이 직접 만든 오리지널 곡 위주로 바뀌게 되는데 이렇게 아티스트 중심으로 흐르다 보니 편안하고 익숙한 음악에서 난해하고 감상 중심 음악으로 이동해 대중들과 멀어지게 된다.                        비밥은 1943년 뉴욕 할렘 118번가 민턴즈 플레이하우스에서 찰리 파커를 중심으로 한 애프터 아워즈 잼 세션(After Hours Jam Sessions)이 그 시작이다. 더 이상 재즈가 춤을 위한 반주 음악이 아닌 연주자 자신의 음악성을 표현하고 그 창조성을 극대화 시키는 음악이 된 것이다. 연주되는 곡들 또한 기존에 사랑 받던 유명 스탠더드에서 연주자들이 직접 만든 오리지널 곡 위주로 바뀌게 되는데 이렇게 아티스트 중심으로 흐르다 보니 편안하고 익숙한 음악에서 난해하고 감상 중심 음악으로 이동해 대중들과 멀어지게 된다.그리고 비밥 곡들은 전체적으로 템포가 빨라지고 연주자의 현란한 솔로 즉흥연주가 중시되는데 그래서 ‘클래식은 작곡가의 음악’, ‘재즈는 연주자의 음악’이란 말이 나오게 된 것이다. 대신 재즈 매니아들이 생겨나, 특히 유럽으로 이주한 미국의 재즈인들로 인해 유럽재즈가 본격적인 궤도에 오르게 된다. 연주자들도 경직된 연주에서 힘을 조금 빼고 자신의 음악 만들기에 열정적으로 도전하게 된다. ‘버드’라는 애칭을 가진 자유로운 영혼의 찰리 파커를 시작으로 디지 길레스피(Dizzy Gillespie)와 버드 파웰(Bud Powell) 등 지금도 재즈의 대표하는 연주자들이 이때 등장한다.하드밥(Hard Bob)의 사운드하드밥(Hard Bob)은 비밥의 전통을 계승하며 보다 어둡고 열정적인 사운드를 보여준 모던 재즈의 대표 장르로 흑인의 특유의 블루스와 가스펠 성향이 짙고 멜로디 라인이 선명한 특징을 가지고 있다. 어감상으로는 비밥보다 어려운 것 같지만 하드밥의 멜로디와 사운드, 그리고 녹음은 매우 우수해 모던재즈 감상의 시작으로 안성맞춤이다. 하드밥은 전체적으로 사운드가 뜨거워 ‘핫 재즈’라고도 하고, 미 동부(필라델피아와 디트로이트) 출신의 흑인들이 중심이어서 ‘이스트 코스트 재즈(East Cost Jazz)’라고도 한다. 특히 존 콜트레인(John Coltrane)과 소니 롤린스(Sonny Rollins)라는 두 라이벌이 등장해 명반과 명연을 많이 남기게 되고, 리 모건(Lee Morgan), 허비 행콕(Herbie Hancock), 아트 블레이키(Art Blakey) 등이 하드밥의 리더로 후대에까지 지대한 영향을 미친다. 하드밥(Hard Bob)은 비밥의 전통을 계승하며 보다 어둡고 열정적인 사운드를 보여준 모던 재즈의 대표 장르로 흑인의 특유의 블루스와 가스펠 성향이 짙고 멜로디 라인이 선명한 특징을 가지고 있다. 어감상으로는 비밥보다 어려운 것 같지만 하드밥의 멜로디와 사운드, 그리고 녹음은 매우 우수해 모던재즈 감상의 시작으로 안성맞춤이다. 하드밥은 전체적으로 사운드가 뜨거워 ‘핫 재즈’라고도 하고, 미 동부(필라델피아와 디트로이트) 출신의 흑인들이 중심이어서 ‘이스트 코스트 재즈(East Cost Jazz)’라고도 한다. 특히 존 콜트레인(John Coltrane)과 소니 롤린스(Sonny Rollins)라는 두 라이벌이 등장해 명반과 명연을 많이 남기게 되고, 리 모건(Lee Morgan), 허비 행콕(Herbie Hancock), 아트 블레이키(Art Blakey) 등이 하드밥의 리더로 후대에까지 지대한 영향을 미친다.포스트밥(Post Bob)시기상 퓨전 재즈가 유행한 후 등장하게 되는 포스트밥은 1980년대 포스트모던 시대에 등장한 모던재즈를 일컫는 말이다. 포스트 밥은 신 전통주의, 네오 밥(Neo Bob) 등 여러 스타일로 혼용되기도 하는데 60년대 말부터 전개된 일렉트릭 퓨전재즈에 대항해 재즈의 고전이라 할 수 있는 모던재즈(비밥, 하드밥)를 새롭게 시도하고 연주하는 것을 말한다. 그 중심에는 모던재즈의 마지막 직계인 트럼펫터 윈튼 마살리스(Wynton Marsalis)가 있는데 그는 타고난 천재성으로 살아있는 재즈의 전설들과 함께 모던재즈의 붐을 다시 일으킨다. 이후 그는 스윙 빅밴드까지 구사하면서 흑인만이 구사할 수 있는 재즈의 아이덴티티를 확립하는데 힘을 쏟는다. 정리하면 지금 연주되는 모던재즈 스타일의 재즈는 거의 포스트 밥, 포스트 하드밥으로 구분되며 시대가 흐르면서 컨템포러리 재즈, 작가주의 재즈 등 여러 용어로 스타일이 세포분열하고 있다.`,
    thumbnail: "/resource/vingaphoto7.jpeg"
    },{
      id: 1,
      user: null,
      title: "애시드 재즈의 시작",
      content: `애시드 재즈는 1987년 영국클럽에서 DJ(자일스 피터슨, 크리스 뱅크스)들이 시작한 음악으로 다른 DJ들과 차별성을 띄기 위해 60년대 소울재즈와 알앤비를 샘플링 하기 시작한 것에서 출발한다. 이때 허비 행콕(Herbie Hancock), 루 도날드슨(Lou Donaldson), 그랜트 그린(Grant Green) 등 주로 블루노트(Blue Note) 레이블에서 활약한 아티스트의 음악들을 사용했는데, 이는 디지털 성향이 짙은 댄스음악에 재즈의 아날로그 성향이 더해진 모습으로 세기말을 대표하는 복합적인 재즈 장르가 된다. DJ들이 구사하는 샘플링(Sampling), 루핑(Looping), 오버더빙(Overdub), 스크래칭(Scratch) 기법은 후에 힙합의 랩까지 더해져 재즈랩과 재즈힙합으로 까지 발전한다.
      가장 대표적인 애시드 재즈는 1991년에 데뷔 앨범 [Hand On The Torch]를 발표한 영국의US3(어스쓰리)로 이들은 허비 행콕의 명곡 ‘Cantaloupe Island’를 새롭게 해석한 ‘Cantaloop’란 곡으로 단번에 정상에 오른다. 그리고 이미 댄서블한 성향을 보이는 퓨전 그룹들도 애시드 재즈로 불리며 사랑 받게 되는데, 장 폴 마우닉(Jean Paul Maunick)의 프로젝트 밴드인 인코그니토(Incognito)는 직접 연주하는 애시드 스타일을 정립한다. 브랜드 뉴 헤비스(Brand New Heavies)가 뒤를 잇고 리더 제이 케이(Jerry.K)의 소울 성향이 강하게 표출되는 자미로콰이(Jamiroquai)는 대중적 인기까지 얻으며 전세계적인 히트를 기록한다. 이후 좀 더 재즈적인 성향으로 기우는 오르간 트리오 MM&W(John Medeski, Billy Martin, Chris Wood)와 소울라이브(Soulive)가 애시드 재즈 중심에 선다.`,
      thumbnail: "https://image.bugsm.co.kr/uniContent/banner/1/159/title2.jpg"
    }, {
      id: 2,
      user: null,
      title: "스윙의 시작",
      content: `뉴올리언스(New Orleans) 재즈나 딕시랜드(Dixieland) 재즈로 불리는 초기재즈는 즉흥성이 매우 강조된 음악이지만 이후 등장한 빅밴드 편성의 스윙재즈는 이미 쓰여진 편곡된 악보를 가지고 연주하는 것이 특색이다. 그렇다고 재즈의 본질이라 할 수 있는 스윙감각과 즉흥연주가 완전 무시되는 것은 아니지만 악보에 의한 앙상블이 반복되면서 연주자들의 민첩성과 연주력이 전반적으로 상승해 세련된 연주를 보여주게 된다. 스윙재즈가 대중들에 사랑을 받게 된 데는 몇 가지 원인이 더 있는데, 경제 대공황(1929년) 이후 젊은이들의 도피처로 빅밴드 연주에 맞추어 춤추는 것이 유행하였고, 라디오 방송과 영화가 발달하며 자연스럽게 음악(재즈)이 소비되면서 이는 음반 판매로 이어져 스윙재즈 인기에 큰 영향을 미치게 된다. 그리고 흑인의 전유물로 인식되던 재즈에 백인스타들이 등장한 것도 한 몫을 하는데 베니 굿맨 (Benny Goodman), 글렌 밀러(Glenn Miller), 아티 쇼(Artie Shaw), 빙 크로스비(Bing Crosby) 등의 인기는 영화배우 못지 않을 정도였다.`,
      thumbnail: "https://image.bugsm.co.kr/uniContent/banner/0/63/title2.jpg"
      }, { 
        id: 3,
        user: null,
        title: "스윙재즈와 빅밴드",
        content: `스윙재즈의 대표적 편성인 빅밴드(Big Band)는 10인조 이상으로 구성된 편성을 말하는데 보통 15인조 내외가 일반적이다. 빅밴드 연주를 자세히 보면 3파트로 나눌 수 있는데 무대 왼편에 리듬 섹션(피아노, 베이스, 드럼, 기타)이 있고, 오른쪽에 브라스 섹션(금관 악기: 트럼펫, 트롬본)과 리드 섹션(목관 악기: 색소폰, 클라리넷)이 자리한다. 재즈의 주요 악기인 피아노, 베이스, 드럼이 빅밴드에서는 그 자리를 관악기들에 내어 주는데 그만큼 금관과 목관 악기의 앙상블이 매우 중요하다. 2개의 악기 군이 곡의 주선율과 반주를 질의응답 형식으로 주고 받으며 연주하며 그 사이사이를 멤버들의 뛰어난 연주력으로 빼곡히 채우게 된다. 그래서 빅밴드를 온전하게 감상하기 위해서는 3개의 섹션을 구분해서 듣는 연습이 필요하다. 특히 트럼펫(금관)과 색소폰(목관)의 구별은 스윙 빅밴드 감상의 매우 중요한 요소가 된다. 빅밴드는 악기군마다 대표 주자들이 있는데 그들의 화려하고 드라마틱한 솔로는 스타 탄생을 예고 했으며 이후 등장하는 비밥 재즈의 밑거름이 되기도 한다.
        그렇다고 스윙재즈에 빅밴드만 있었던 것은 아니다. 듀크 엘링턴의 오른팔과 왼팔을 담당한 알토 색소포니스트 베니 카터(Benny Carter)와 조니 호지스(Johnny Hodges), 중후한 테너 색소폰의 주인공 콜맨 호킨스(Coleman Hawkins), 그리고 루이 암스트롱의 뒤를 잇는 로이 엘드리지(Roy Eldridge)와 해리 ‘스위트’ 에디슨(Harry ‘Sweets’ Edison) 같은 뛰어난 트럼펫터들이 자신의 소규모 밴드를 이끌며 왕성한 활동을 보여주었다.`,
        thumbnail: "https://cdn.jejudomin.co.kr/news/photo/201908/115223_109088_5227.jpg"
      }, {
        id: 4,
        user: null,
        title: "보사노바의 매력",
        content: `보사노바 음악이 지닌 매력은 단순히 편안함에 있는 것이 아니라 그 편안함이 긴장을 헤치고 나오기 때문이다. 살짝 미는 듯 하다가 당기기를 반복하는 보사노바의 오묘한 리듬은 긴장과 이완의 반복을 의미한다. 만약 마냥 늘어지기만 하는 리듬이었다면 보사노바 음악은 이내 지루하게 느껴져 지금처럼 큰 인기를 얻지는 못했을 것이다. 한편, 보사노바는 분명 리듬에서 시작되었지만 그 안에는 화성과 멜로디 모두가 관여되어 있다. 실제 기타나 피아노가 혼자 만들어내는 보사노바 리듬을 들어보면 리듬의 진행 속에 코드가 변화하고 그 안에서 자연스레 멜로디가 드러남을 느낄 수 있을 것이다. 바로 이러한 이유로 다른 어느 리듬보다 보사노바가 리듬을 넘어선 하나의 음악 장르로 인정받으며 브라질을 뛰어넘는 세계적 인기를 얻을 수 있었다고 생각한다.
        포르투갈어로 “새로운 흐름 또는 경향” 이라는 뜻을 가진 보사노바는 브라질의 복잡한 삼바리듬이 웨스트 코스트 재즈(West Coast Jazz)의 감수성, 프랭크 시나트라(Frank Sinatra)로 대표되는 보컬 하모니의 영향이 더해져 간결하고 명징하게 들리도록 만든 음악 장르이다. 보사노바는 아주 오래된 음악이 아니다. 1950년대 후반에 만들어진 음악으로 정확히 말한다면 브라질의 여가수 엘리제치 카르도조(Elizeth Cardoso)가 그녀의 1958년도 앨범 [Cancao Do Amor Demais]에서 노래한 ‘Chega De Saudade’를 노래하면서 보사노바의 역사가 시작되었다고 할 수 있다. 이 곡은 안토니오 카를로스 조빔(Antonio Carlos Jobim)이 곡을 만들고 비니시우스 드 모라에스(Vinicius De Moraes)가 가사를 썼으며 조앙 질베르토(Joao Gilberto)가 기타 연주로 이루어졌다. 그리고 이 곡은 같은 해 조앙 질베르토 본인의 노래로 다시 발표된다. 따라서 조빔, 모라에스, 질베르토 세 사람이 보사노바를 탄생시켰다고 할 수 있겠는데 그 가운데서 삼바를 기반으로 쿨재즈적인 색채가 느껴지는 신비한 리듬을 만든 사람은 조앙 질베르토였다. 그래서 보사노바의 역사는 조앙 질베르토를 보사노바의 창시자로 말하고 있다.`,
        thumbnail: "https://image.bugsm.co.kr/uniContent/banner/1/104/title2.jpg"
        },{
          id: 5,
          user: null,
          title: "노래가 있는 재즈, 보컬 재즈",
          content: `스윙재즈를 지나, 1940년 중반 비밥(Bebop)시대를 맞이하면서 재즈는 급속도로 연주 중심 음악으로 재편이 되어 대중들과는 조금씩 멀어지게 된다. 거기에 더해 세월이 흐르면서 하드밥(Hard Bob), 쿨재즈(Cool Jazz), 퓨전재즈(Fusion Jazz), 에스닉 재즈(Ethnic Jazz)로 장르가 다양해져서 노래가 있는 보컬 재즈는 위상이 점점 축소되게 된다. 그렇지만 보컬 재즈는 재즈를 듣기 시작하는 초보자들에게 좋은 가이드임에 틀림없다. 앞에 말한 대로 스탠더드를 반복해서 연주하는 재즈의 특성상 보컬이 있는 곡을 먼저 듣고 연주곡을 듣게 되면 곡을 이해하는데 큰 도움이 되기 때문이다. 보컬 재즈는 재즈 감상의 첫 걸음이다.
          보컬 재즈의 시작이라 할 수 있는 루이 암스트롱은 뛰어난 트럼페터(Trumpeter)로 재즈 보컬리스트의 상징이라 할 수 있는 스캣(Scat) 창법을 구사해 보컬 재즈의 원형을 이루며 수많은 후배들에게 영향을 미치게 된다. 그러나 보컬 재즈는 남성 연주자가 압도적으로 강세를 보이는데 재즈에서 여성 아티스트가 우위를 점하고 있는 유일한 스타일로 재즈보컬의 3대 디바 ‘빌리 홀리데이(Billy Holiday), 엘라 피츠 제랄드(Ella Fitzgerald), 사라 본(Sarah Vaughan)’이 있다. 재즈 보컬을 예술적 경지로 승화시킨 레이디 데이(Lady Day) 빌리 홀리데이(1915~1959), 지고 지순한 재즈 보컬의 완결체로 13개의 그래미 트로피, 4천만장의 음반 판매를 기록한 ‘The First Lady Of Song’ 엘라 피츠제럴드(1917~1996), 그리고 풍성한 성량과 묵직한 중저음으로 재즈 보컬의 품격을 높인 ‘Sassy’ 사라 본(1924~1990)은 그야말로 재즈 보컬의 시작과 끝이라 할 수 있다.`,
          thumbnail: "https://image.bugsm.co.kr/uniContent/banner/2/204/title2.jpg"
        }, {
          id: 6,
          user: null,
          title: "퓨전재즈",
          content: `기본적으로 락 형식과 재즈 연주가 퓨전의 중심이지만 그 안에는 60년대 대중에게 사랑 받은 소울뮤직과 기타 중심의 블루스 락, 그리고 70년대 만개하는 브라스 락과 디스코 등이 영향을 주고 받는다. 이렇듯 여러 모습을 가지고 있는 퓨전재즈는 재즈가 다시 대중들 앞에 나서게 되는 기회를 주게 된다. 퓨전재즈를 주도한 거장 마일즈 데이비스(Miles Davis)는 일렉트로닉 악기를 과감하게 사용하고 거기에 자신의 트럼펫에 전기 코드까지 꽂는데 이런 시도는 수많은 추종자들을 양산하게 된다. 마일즈 데이비스는 1960년대 중반 지미 핸드릭스(Jimi Hendrix)와 슬라이 앤 더 패밀리 스톤(Sly & The Family Stone) 등의 음악에 영향을 받아 락과의 퓨전을 꾸준히 시도하는데, 결국 솔로와 리듬을 편집작업을 통해 인위적으로 재구성하고 아프리카 주술의식에서 모드와 프리재즈까지 경계를 모두 열어두는 문제작인 앨범 [Bitches Brew]를 발표하면서 퓨전재즈의 새 장을 열었다.
          락의 특징인 단순한 코드 진행에 보컬이 강조된 그룹 음악이 즉흥 연주가 중심인 재즈와 섞이면서 퓨전재즈는 음악 팬들에게 강렬한 인상을 남긴다. 신진 세력인 허비 행콕(Herbie Hancock), 칙 코리아(Chick Corea), 존 맥러플린(John McLaughlin), 조 자비눌(Joe Zawinul) 등이 재즈의 관습적인 콤핑(Comping)에서 벗어나 일렉트로닉 악기로 락 적인 반복 리프를 사용하여 단번에 재즈의 중심으로 떠오른다. 이들은 모두 마일즈 데이비스에게 영향 받은 일명 ‘마일즈 데이비스 사단’ 출신들로 내공을 기른 다음 둥지를 벗어나 70년대 초반 그룹들을 결성해 퓨전재즈에 날개를 달아준다.
          조 자비눌과 웨인 쇼터(Wayne Shorter), 그리고 체코 출신 베이시스트 미로슬라브 비투스(Miroslav Vitous)가 결성한 웨더리포트(Weather Report)는 총체적 즉흥 연주로 개인보다 그룹의 사운드에 집중한 연주로 각광을 받게 된다. 후에 기린아 자코 패스트리우스(Jaco Pastrious)로 베이스가 교체되는데 웨더리포트의 인기는 락 밴드를 능가할 정도로 절정에 오른다. 기타리스트 존 맥러플린의 마하비쉬누 오케스트라(Mahavishnu Orchestra)는 바이올린의 제리 굿맨(Jerry Goodman), 건반의 얀 해머(Jan Hammer), 드럼의 빌리 콥햄(Billy Cobham) 등과 함께 프로그레시브한 사운드와 헤비한 기타 톤을 선보여 락 팬들에게 주목을 받게 된다. 그는 이후, 인도 음악을 연주하는 샥티(Shakti)를 결성하는 등 퓨전의 가장 모범적인 연주자로 활동한다. 칙 코리아가 이끈 리턴 투 포에버(Return to Forever)는 남미풍의 리듬과 리더의 다양한 키보드가 인상적이고 허비 행콕은 알앤비 정서가 짙은 헤드 헌터스(Head Hunters)로 퓨전재즈 그룹 1기를 이끈다.
          퓨전재즈의 인기는 자연스럽게 여러 신인들의 등장을 불러 오는데 일렉트로닉 악기의 대표인 기타가 먼저 주목을 받게 된다. 존 맥러플린을 비롯해 팻 메스니(Pat Metheny), 존 스코필드(John Scofield), 조지 벤슨(George Benson), 빌 프리셀(Bill Frisell), 마이크 스턴(Mike Stern) 등 셀 수 없을 정도로 많은 기타리스트가 등장하고 이들은 지금도 왕성한 활동을 보이고 있다. 그리고 국내 재즈 팬들에게는 래리 로젠(Larry Rosen)과 데이브 그루신(Dave Grusin)이 설립한 재즈 레이블 ‘GRP(Grusin/Rosen Productions)’가 사랑 받는데, 데이브 그루신을 비롯해 리 릿나워(Lee Ritenour), 더 옐로우쟈켓스(The Yellowjakets), 스파이로 자이라(Spyro Gyra) 등 개인과 그룹이 다채롭게 선보인다. 특히, ‘GRP’는 디지털 방식의 제작 과정을 내세워 일렉트로닉 악기가 주를 이루는 퓨전재즈에 새로운 명가로 자리 잡게 된다. 여기에 일본의 퓨전재즈 그룹인 카시오페아(Casiopea)와 티-스퀘어(T-Square)가 ‘J-Fusion’으로 불리며 또한 사랑을 받게 된다. 이 그룹들은 현란한 개인기를 바탕으로 완벽한 팀워크를 보여주는데 이들도 벌써 결성 30년이 훌쩍 지난 노장 그룹이다.`,
          thumbnail: "https://image.bugsm.co.kr/uniContent/banner/2/283/title2.jpg"
          }, { 
            id: 7,
            user: null,
            title: "쿨 재즈(Cool Jazz)",
            content: `크게 본다면 모던재즈 울타리에 있기 때문에 리듬과 즉흥연주는 비밥의 원칙을 따르지만 격렬한 느낌보다는 냉정하고 정적인 분위기를 추구하고 있다. 그리고 쿨 재즈를 웨스트 코스트 재즈(West Cost Jazz)라고도 하는데 이는 초기 쿨 재즈 스타일들이 미 서부해안(L.A) 지역을 중심으로 활동하는 연주자들이 비밥을 건너 뛰어 앙상블과 편곡을 중시하는 스윙재즈 낭만을 이어 받은 경우가 많기 때문이다. 그리고 백인이 강세인 쿨 재즈에 비해 동부지역(필라델피아와 디트로이트) 출신의 흑인들이 강세인 하드밥에 대응되는 용어이기도 하다.
            어떤 음악 스타일이 등장할 때는 당연히 앞선 것과 차별화를 두기 마련인데 쿨 재즈는 부드럽고 따라가기 쉬운 경향으로 비밥에 비해 훨씬 압축적이고 절제된 멜로디 라인을 가지고 있다. 거기에 제한된 비브라토(Vibrato)와 블루스적인 어법을 완화시킨 세련된 화성을 적극적으로 사용하여 비밥이 다소 부담스러운 음악 팬들에게 다가 갈수 있는 재즈로 사랑 받고 있다. 그런데 고음을 자제하고 음량이 비밥과 하드밥에 비해 작아지면서 재즈의 기본이라 할 수 있는 힘과 정열이 부족하다는 평을 받게 되기도 한다. 당시 연주자들 사이에서는 이런 뉘앙스 때문에 쿨 재즈나 웨스트 코스트 재즈로 자신이 분류되는 것을 탐탁해하지 않았다고 한다. 따라서 대부분의 연주자들은 비밥과 쿨 재즈를 오가며 활동했고 경우에 따라서는 쿨과 밥이 혼재하는 스타일의 연주를 즐겼다.
            쿨 재즈는 스윙시대인 1930년대 레스터 영(Lester Young)과 카운트 베이시(Count Basie), 1940년대 레니 트리스타노(Lennie Tristano)에 기원을 두고 있지만 대체적으로 마일스 데이비스(Miles Davis)가 1949년에 발표한 전설적인 앨범 [Birth Of Cool]이 시작이다. 캄보(Combo) 편성이 일반적인 당시, 캄보도 빅밴드도 아닌 노넷(NORN9, 9중주) 편성으로 클래식의 실내악이 떠오르는 정교한 앙상블과 부드러운 즉흥연주가 재즈 팬들을 사로잡게 된다. 지난 2012년 12월 천수를 누리고 떠난 피아니스트 데이브 브루벡(Dave Brubeck)은 알토 색소포니스트 폴 데스몬드(Paul Desmond)와 함께 재즈를 대표하는 명곡이자 쿨 재즈의 특징이 잘 녹아있는 'Take Five'을 남긴 전설의 연주자이다. 모던 재즈 쿼텟(Modern Jazz Quartet)은 재즈 역사상 그 유사성 찾을 수 없을 정도로 독보적인 사운드를 구축한 팀이다. 가볍고 선율적이지만 리듬이 확고한 블루스 구사를 했으며 리더인 존 루이스(John Lewis)의 피아노와 밀트 잭슨(Milt Jackson)의 비브라폰(Vibra Phone)이 묘한 긴장감을 유지시켰는데, 특히 대위법(바흐)과 블루스를 절묘하게 연주는 쿨 재즈를 넘어선 모던 재즈 쿼텟만의 연주로 인정받고 있다.`,
            thumbnail: "https://image.bugsm.co.kr/uniContent/banner/28/2821/title2.jpg"
          }, 
],
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
          name: "Bong Passelle",
        },
        {
          position : "piano",
          name: "Appe Passelle",
        },
        {
          position : "base",
          name: "Ssu Passelle",
        },
        {
          position : "trumpet",
          name: "Bryan Passelle",
        },
      ],
      thumbnail: "",
      content: "국내 최초 !! 가족단 퀄텟이 공연하는 편안한 재즈공연입니다.",
      showCharge: "18000",
    },
    {
      id: "02",
      jazzbarId: "01",
      date: "2021-07-25",
      time: "20:30-21:30",
      player: [
        {
          position : "singer",
          name: "Suzy Kim",
        },
        {
          position : "piano",
          name: "Kylie Kim",
        },
        {
          position : "drum",
          name: "Done Diselle",
        },
        {
          position : "trumpet",
          name: "Shane Brook",
        },
      ],
      thumbnail: "",
      content: "가수출신의 Suzy님이 이끄는 경력 20년차 연주자들로 구성되어 있습니다. 아름다운 재즈의 정취를 느껴보시기 바랍니다.",
      showCharge: "18000",
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
          id: 5,
          barName: '뱅가(vin-ga)',
          moblie: '02-516-1761',
          defaultSeat: '40',
          area: '서울 강남구',
          thumbnail: '/resource/newres_vinga.jpeg',
          address: '서울 강남구 언주로168길 6',
          rating: '4.61',
          serviceOption: '123458',
          openTime: '15:00-22:00',
          gpsX: 127.03391009658522,
          gpsY: 37.52632347180628,
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
          id: 5,
          barName: '뱅가(vin-ga)',
          moblie: '02-516-1761',
          defaultSeat: '40',
          area: '서울 강남구',
          thumbnail: '/resource/newres_vinga.jpeg',
          address: '서울 강남구 언주로168길 6',
          rating: '4.61',
          serviceOption: '123458',
          openTime: '15:00-22:00',
          gpsX: 127.03391009658522,
          gpsY: 37.52632347180628,
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
          id: 5,
          barName: '뱅가(vin-ga)',
          moblie: '02-516-1761',
          defaultSeat: '40',
          area: '서울 강남구',
          thumbnail: '/resource/newres_vinga.jpeg',
          address: '서울 강남구 언주로168길 6',
          rating: '4.61',
          serviceOption: '123458',
          openTime: '15:00-22:00',
          gpsX: 127.03391009658522,
          gpsY: 37.52632347180628,
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
          id: 5,
          barName: '뱅가(vin-ga)',
          moblie: '02-516-1761',
          defaultSeat: '40',
          area: '서울 강남구',
          thumbnail: '/resource/newres_vinga.jpeg',
          address: '서울 강남구 언주로168길 6',
          rating: '4.61',
          serviceOption: '123458',
          openTime: '15:00-22:00',
          gpsX: 127.03391009658522,
          gpsY: 37.52632347180628,
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
          id: 5,
          barName: '뱅가(vin-ga)',
          moblie: '02-516-1761',
          defaultSeat: '40',
          area: '서울 강남구',
          thumbnail: '/resource/newres_vinga.jpeg',
          address: '서울 강남구 언주로168길 6',
          rating: '4.61',
          serviceOption: '123458',
          openTime: '15:00-22:00',
          gpsX: 127.03391009658522,
          gpsY: 37.52632347180628,
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
          id: 5,
          barName: '뱅가(vin-ga)',
          moblie: '02-516-1761',
          defaultSeat: '40',
          area: '서울 강남구',
          thumbnail: '/resource/newres_vinga.jpeg',
          address: '서울 강남구 언주로168길 6',
          rating: '4.61',
          serviceOption: '123458',
          openTime: '15:00-22:00',
          gpsX: 127.03391009658522,
          gpsY: 37.52632347180628,
        },

      }
    },
  ],
  barList: [
    {
      id: 1,
      barName: '도쿄재즈',
      moblie: '02-3453-4472',
      defaultSeat: '50',
      area: '서울 강남구',
      thumbnail: '/resource/newres-tokyojazz.jpeg',
      address: '서울 강남구 삼성로104길 28 2층',
      rating: '4.5',
      serviceOption: '1378',
      openTime: '19:00-03:00',
      gpsX: 127.05700563008169,
      gpsY: 37.51125488294517, 
    },{
      id: 2,
      barName: '천년동안도',
      moblie: '02-743-5555',
      defaultSeat: '50',
      area: '서울 종로구',
      thumbnail: '/resource/newres_cndad.jpeg',
      address: '서울 종로구 수표로 134 2층',
      rating: '4.35',
      serviceOption: '58',
      openTime: '18:00-00:00',
      gpsX: 126.98849270153957,
      gpsY: 37.57301585893166,
    },{
      id: 3,
      barName: '블루밍(Blooming)',
      moblie: '02-000-0000',
      defaultSeat: '20',
      area: '서울 강남구',
      thumbnail: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210402_28%2F1617367290722to125_JPEG%2F6HqcYzYeBJ-MaIfjKYr17bGG.jpg',
      address: '서울 강남구 테헤란로19길 21 지하1층',
      rating: '5.0',
      serviceOption: '57',
      openTime: '19:00-01:00',
      gpsX: 127.0330022861834,
      gpsY: 37.50138216866616,
    },{
      id: 4,
      barName: '포지티브 제로 라운지(positive zero lounge)',
      moblie: '02-462-5994',
      defaultSeat: '20',
      area: '서울 성동구',
      thumbnail: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200519_289%2F1589874670567VAiY6_JPEG%2Fpzl_naver_2.jpg',
      address: '서울 성동구 연무장길 14-2 지하1층',
      rating: '4.57',
      serviceOption: '38',
      openTime: '18:00-22:00',
      gpsX: 127.05089822987973,
      gpsY: 37.543635738625305,
    },{
      id: 5,
      barName: '뱅가(vin-ga)',
      moblie: '02-516-1761',
      defaultSeat: '40',
      area: '서울 강남구',
      thumbnail: '/resource/newres_vinga.jpeg',
      address: '서울 강남구 언주로168길 6',
      rating: '4.61',
      serviceOption: '123458',
      openTime: '15:00-22:00',
      gpsX: 127.03391009658522,
      gpsY: 37.52632347180628,
    }
  ],
jazzBarId : 5,
// jazzbar : [],
  jazzbar: {
    id: 5,
    barName: '뱅가(vin-ga)',
    moblie: '02-516-1761',
    defaultSeat: '40',
    area: '서울 강남구',
    thumbnail: '/resource/newres_vinga.jpeg',
    address: '서울 강남구 언주로168길 6',
    rating: '4.61',
    serviceOption: '123458',
    openTime: '15:00-22:00',
    gpsX: 127.03391009658522,
    gpsY: 37.52632347180628,
    },

  barPhoto: [
    '/resource/newres_vinga.jpeg',
    '/resource/vingaphoto1.jpeg',
    '/resource/vingaphoto2.jpeg',
    '/resource/vingaphoto3.jpeg',
    '/resource/vingaphoto4.jpeg',
    '/resource/vingaphoto5.jpeg',
    '/resource/vingaphoto6.jpeg',
    '/resource/vingaphoto7.jpeg',
  ],
  reviewList: [],//{}
  myReviewId: null,
  menu: [
    {
      thumbnail: '/resource/vingamenu1.jpeg'
    },
    {
      thumbnail: '/resource/vingamenu2.jpeg'
    },
    {
      thumbnail: '/resource/vingamenu3.jpeg'
    },
  ],
  showList: [
    {
      id: 1,
      jazzbarId:5,
      time: '19:00',
      date: '2021-07-31',
      player: '김태선재즈퀄텟',
      thumbnail: '/resource/jimin.png',
      content: 'spain, yatra-ta, misty 등 역병의 주요 곡을 연주해 드립니다',
      showCharge: '20000',
      currentSeat : 23,
    }, {
      id: 2,
      jazzbarId:5,
      time: '22:00',
      date: '2021-07-31',
      player: '서지민트리오',
      thumbnail: '/resource/jimin2.png',
      content: '그대의 눈동자에 cheers',
      showCharge: '20000',
      currentSeat : 15,
    }, {
      id: 3,
      jazzbarId:5,
      time: '23:00',
      date: '2021-07-31',
      player: '김수황재즈듀오',
      thumbnail: '/resource/conflict.png',
      content: '마이시퀄의 따듯한 세계에서 멀터의 늪까지',
      showCharge: '20000',
      currentSeat : 33,
    }, {
      id: 4,
      jazzbarId:5,
      time: '18:30',
      date: '2021-08-01',
      player: '김인기코드빅밴드',
      thumbnail: '/resource/error.png',
      content: '그 의지라면 관람할 수 있습니다',
      showCharge: '20000',
      currentSeat : 23,
    }, {
      id: 5,
      jazzbarId:5,
      time: '20:20',
      date: '2021-08-01',
      player: '김홍식핑크재즈',
      thumbnail: '/resource/why500.png',
      content: '새로운 재즈의 세계에 빠져보세요',
      showCharge: '20000',
      currentSeat : 15,
    }, {
      id: 6,
      jazzbarId:5,
      time: '21:00',
      date: '2021-08-02',
      player: '이호용트리오',
      thumbnail: '/resource/dead.png',
      content: '재즈 입문의 가이드가 되어 드리겠습니다',
      showCharge: '20000',
      currentSeat : 33,
    }, {
      id: 7,
      jazzbarId:5,
      time: '23:00',
      date: '2021-08-02',
      player: '민철재즈베이비',
      thumbnail: '/resource/rightnow.png',
      content: '떠오르는 신인',
      showCharge: '20000',
      currentSeat : 33,
    }

  ],
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
  },

  
  // 추후 추가 혹은 안쓰는 state의 경우 삭제
};

export default initialState;
