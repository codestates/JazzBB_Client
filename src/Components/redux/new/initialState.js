// import "/resource"
//"/resource/"
const initialState = {
  AllPage : true,
  user: {
    isLogin: false, // 로그인 상태 확인
    token: null, // 토큰 저장
    id: null, // db식별 id
    userId: "dkrlxhRL07",
    username: '안세은', // 회원정보 수정
    mobile: '010-2733-8320', // 회원정보 수정, reservation
    thumbnail: null, // 회원정보 수정 초기 값 더미데이터 있으면 좋을듯
    usertype: null, // 사장님인지 확인
    jazzbarId: null, // 사장님인 경우 사용 or 재즈바 선택시 사용
  },
  modifyUser:{
    username: null,
    mobile: null,
  },
  boardList: [
    {
    id: 1,
    user: {
      isLogin: false, // 로그인 상태 확인
      token: null, // 토큰 저장
      id: null, // db식별 id
      userId: "dkrlxhRL07",
      username: '안세은', // 회원정보 수정
      mobile: '010-2733-8320', // 회원정보 수정, reservation
      thumbnail: null, // 회원정보 수정 초기 값 더미데이터 있으면 좋을듯
      usertype: null, // 사장님인지 확인
      jazzbarId: null, // 사장님인 경우 사용 or 재즈바 선택시 사용
    },
    title: "야 이거 지리더라",
    content: "오져따리 오져따 대박 중박 소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오지고 지리고 레리꼬 니똥꼬에 알차고 비벼머꼬~~~ 오져따리 오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고여 슭곰발이 인정하는 바입니아~~~ 드립이 후진게 후지산급~~~ 이거레알 반박불가 빼박캔트 버벌진트 버켄스탁인 부분 지리고요~~ 팩트체크들어가 샘오취리도 놀라서 에취하고요~~ 내 드립 오지는부분 실화냐? 충격실화 감동실화인 부분 ㅇㅈ? ㅇㅇㅈ~~~오늘부터 동의~ 어 보감~ 대박중박소박명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 오지고지리고레리꼬 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인 부분 지리고요~오지고지리고렛잇고아리랑고개를넘어새가날아들어좌로인정우로인정뒷구르기인정앞으로인정뒤로인정앞구르기인정옆구르기인정풍차돌리기인정레알마드리드인정공중회전세바퀴후인정따리인정따쿵취따취샘오리취갈취따취ㅇㄱㄹㅇㅃㅂㄱ에바쎄바쌈바디바참치넙치꽁치삼치갈치뭉치면살고흩어지면인정하는각이옵니다!!오졋다리오졋다 이거도 두번보는각인가요~~?개오지는 각이구요~아 오지고 지리고 인정하는 부분이고요~좌로인정 우로인정 앞구르기인정 인정올리지말고 인정내려 인정안해서 후회한다면 후회할시간을 후회하는 각이고요~아리랑 고개를 넘어서 새가 지저귀는 부분이고요~인정하지않는 사람 에바참치꽁치가문의수치~뭉치면살고 흩어지면 삼각사각오각생각생각죽는각입니다요~ 앙구라띠 김구라띠 앙기모찌 앙김치~ 지리구욘~오지구욘~토르비욘~대박중박소박 명박이도 ㅇㅈ하는각 지렷고 오졋꼬 레리꼬 니똥꼬에 알파고 비벼머꼬~~~~ㅋㅋㅋㅋ 오져따리오져따쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~ㅋㅋㅋㅋ 드립이 후진게 후지산급~~~~ㅇㅈ합니까? 어 ㅇㅈ~ㅋㅋㅋㅋ 이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인부분 ㅋㅋㅋ 팩트체크들어가니 샘오취리도 놀라서 애취하는 부분 지리고요 오지고요 고요고요 고요한 밤이고요 ㅋㅋㅋ내트립 ㅍㅌㅊ?ㅅㅌㅊ? ㅋㅋㅋㅋ어상타치~ㅋㅋㅋㅋㅋㅋ앙 기모띠 디바띠 메르띠~! 오지는 부분 실화냐? 다큐냐?인정?어 인정~ 오지는각입니다 전하~ 이거 완전 에바세바참치꽁치넙치뭉치면살고 흩어지면 죽는 각 아니더냐?! 인정하는 부분이옵니다 전하~ 안되겠다! 지금당장 학자들을 모아 집현전을 세우고 오로지 백성들만을 위한 글자를 만들겠노라! 오지는 부분이옵니다 전하~ 오늘따라 바람도 선선한것이 기부니가 기모띠한 부분이로구나. 오지구 지리구 아리랑고개를 넘어 새가 날아들어 지저귀는부분이옵니다~ 오! 그대 표현력이 리얼루다가 상타치로구나! 이름이 무엇이냐?! 아니요 뚱이라고하옵니다. 이놈을 매우쳐라... 내 글자를 한번 만들어봤는데 님들에게 인정받고싶소! 앙상한 나무를 빗대어 앙! 힘찬 물줄기의 기운을 받아 기! 나무를 본따 목! 그리고 짐이 닭띠이기때문에 띠! 이름하여 앙 김옥띠가 되는 부분이오! 띠요용~! 이후로도 세종대왕의 연구는 계속됐고, 급식을 가르치는 바른소리라는뜻에 급식정음이란책을 편찬하게 되었습니더 행님들~ 허허허허 거 글자가 있으니까 오지게 편한부분 인정? 옹~인졍~ 앙 기목띠~ 오지는각~ 지리는각~개오지는각이구요~~~~지렸구요~~~오졌구요~~~~아리랑고개를 넘구요~~~~새가 날아들어 지저귀는 각이구요~~~정신을 차리니 나는 도원향에 와있구요~~~~신선들이 놀음하고 복숭아꽃 만발하구오 오지구요!~~~구라에 무릎을 탁! 치고 갑니다~~대박 중박 소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오지고 지리고 레리꼬 니똥꼬에 알파고 비벼머꼬~~~ 오져따리 오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~드립이 후진게 후지산급~~~ 이거레알 반박불가 빼박캔트 버벌진트인 부분~~~ 팩트체크들어가 샘오취리도 놀라서 에취하고요~~ 내 드립 오지는 부분 실화냐? 충격실화 감동실화인 부분 ㅇㅈ? ㅇㅇㅈ~~~지리구욘~오지구욘~토르비욘~대박중박소박 명박이도 ㅇㅈ하는각 지렷고 오졋꼬 레리꼬 니똥꼬에 알파고 비벼머꼬~~~~ㅋㅋㅋ 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~ㅋㅋㅋㅋㅋ 드립이 후진게 후지산급~~~~ ㅇㅈ합니까? 어 ㅇㅈ~ㅋㅋㅋ 이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인 부분 ㅋㅋㅋ팩트체크들어가니 샘오취리도 놀라서 에취하는부분 지리고요 오지고요 고요고요 고요한 밤이고요 ㅋㅋㅋㅋㅋ내 드립 ㅍㅌㅊ? ㅅㅌㅊ??ㅋㅋㅋㅋㅋ 어 상타치~ ㅋㅋㅋㅋㅋㅋ앙기모띠 디바띠 메르띠! 오지는부분 실화냐? 다큐냐? 인정? 어 린정~개오지는 각이구요 지렸구요 오졌구요 아리랑 고개를 넘구요 새가 날아들어 나에게 지저귀는 각이구요 정신을 차리니 나는 도원향에 와있구요 신선들이 놀음하고 복숭아꽃 만발하구요 오지구요 대박중박소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~샘오취리도 놀라서 에취하고요~~오 이건진심 기타 강타 낙타 나타 난타 넥타 단타 담타 대타 델타 도타 두타 망타 맹타 무타 미타 반타 방타 배타 범타 베타 불타 빈타 스타 안타 애타 여타 연타 유타 의타 이타 자타 장타 조타 질타 차타 추타 출타 취타 치타 태타 통타 투타 피타 한타 해타 화타 환타 결정타 나유타 나프타 대취타 득점타 무안타 방향타 백운타 병살타 보룬타 삼루타 소나타 소취타 승강타 아가타 아미타 아루타 일루타 적시타 치명타 칸타타 구데타 토카타 톱스타 통기타 피에타 희생타 가타부타 내얀안타 단단무타 단봉낙타 보리살타 슈퍼스타 스킬기타 쌍봉낙타 아리에타 아베스타 염불급타 오페레타 자천배타 자행화타 첼레스타 칸초네타 테라코타 풍타낭타 피리칸타 마르나카르타 석유나프타 스피로헤타 트리오소나타 하와이안기타기타 강타 낙타 나타 난타 넥타 단타 담타 대타 델타 도타 두타 망타 맹타 무타 미타 반타 방타 배타 범타 베타 불타 빈타 스타 안타 애타 여타 연타 유타 의타 이타 자타 장타 조타 질타 차타 추타 출타 취타 치타 태타 통타 투타 피타 한타 해타 화타 환타 결정타 나유타 나프타 대취타 득점타 무안타 방향타 백운타 병살타 보룬타 삼루타 소나타 소취타 승강타 아가타 아미타 아루타 일루타 적시타 치명타 칸타타 구데타 토카타 톱스타 통기타 피에타 희생타 가타부타 내얀안타 단단무타 단봉낙타 보리살타 슈퍼스타 스킬기타 쌍봉낙타 아리에타 아베스타 염불급타 오페레타",
    thumbnail: "dfddsffw"
  },{
    id: 2,
    user: {
      isLogin: false, // 로그인 상태 확인
      token: null, // 토큰 저장
      id: null, // db식별 id
      userId: "dkrlxhRL07",
      username: '안세은', // 회원정보 수정
      mobile: '010-2733-8320', // 회원정보 수정, reservation
      thumbnail: null, // 회원정보 수정 초기 값 더미데이터 있으면 좋을듯
      usertype: null, // 사장님인지 확인
      jazzbarId: null, // 사장님인 경우 사용 or 재즈바 선택시 사용
    },
    title: "야 이거 오지더라",
    content: "오져따리 오져따 대박 중박 소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오지고 지리고 레리꼬 니똥꼬에 알차고 비벼머꼬~~~ 오져따리 오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고여 슭곰발이 인정하는 바입니아~~~ 드립이 후진게 후지산급~~~ 이거레알 반박불가 빼박캔트 버벌진트 버켄스탁인 부분 지리고요~~ 팩트체크들어가 샘오취리도 놀라서 에취하고요~~ 내 드립 오지는부분 실화냐? 충격실화 감동실화인 부분 ㅇㅈ? ㅇㅇㅈ~~~오늘부터 동의~ 어 보감~ 대박중박소박명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 오지고지리고레리꼬 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인 부분 지리고요~오지고지리고렛잇고아리랑고개를넘어새가날아들어좌로인정우로인정뒷구르기인정앞으로인정뒤로인정앞구르기인정옆구르기인정풍차돌리기인정레알마드리드인정공중회전세바퀴후인정따리인정따쿵취따취샘오리취갈취따취ㅇㄱㄹㅇㅃㅂㄱ에바쎄바쌈바디바참치넙치꽁치삼치갈치뭉치면살고흩어지면인정하는각이옵니다!!오졋다리오졋다 이거도 두번보는각인가요~~?개오지는 각이구요~아 오지고 지리고 인정하는 부분이고요~좌로인정 우로인정 앞구르기인정 인정올리지말고 인정내려 인정안해서 후회한다면 후회할시간을 후회하는 각이고요~아리랑 고개를 넘어서 새가 지저귀는 부분이고요~인정하지않는 사람 에바참치꽁치가문의수치~뭉치면살고 흩어지면 삼각사각오각생각생각죽는각입니다요~ 앙구라띠 김구라띠 앙기모찌 앙김치~ 지리구욘~오지구욘~토르비욘~대박중박소박 명박이도 ㅇㅈ하는각 지렷고 오졋꼬 레리꼬 니똥꼬에 알파고 비벼머꼬~~~~ㅋㅋㅋㅋ 오져따리오져따쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~ㅋㅋㅋㅋ 드립이 후진게 후지산급~~~~ㅇㅈ합니까? 어 ㅇㅈ~ㅋㅋㅋㅋ 이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인부분 ㅋㅋㅋ 팩트체크들어가니 샘오취리도 놀라서 애취하는 부분 지리고요 오지고요 고요고요 고요한 밤이고요 ㅋㅋㅋ내트립 ㅍㅌㅊ?ㅅㅌㅊ? ㅋㅋㅋㅋ어상타치~ㅋㅋㅋㅋㅋㅋ앙 기모띠 디바띠 메르띠~! 오지는 부분 실화냐? 다큐냐?인정?어 인정~ 오지는각입니다 전하~ 이거 완전 에바세바참치꽁치넙치뭉치면살고 흩어지면 죽는 각 아니더냐?! 인정하는 부분이옵니다 전하~ 안되겠다! 지금당장 학자들을 모아 집현전을 세우고 오로지 백성들만을 위한 글자를 만들겠노라! 오지는 부분이옵니다 전하~ 오늘따라 바람도 선선한것이 기부니가 기모띠한 부분이로구나. 오지구 지리구 아리랑고개를 넘어 새가 날아들어 지저귀는부분이옵니다~ 오! 그대 표현력이 리얼루다가 상타치로구나! 이름이 무엇이냐?! 아니요 뚱이라고하옵니다. 이놈을 매우쳐라... 내 글자를 한번 만들어봤는데 님들에게 인정받고싶소! 앙상한 나무를 빗대어 앙! 힘찬 물줄기의 기운을 받아 기! 나무를 본따 목! 그리고 짐이 닭띠이기때문에 띠! 이름하여 앙 김옥띠가 되는 부분이오! 띠요용~! 이후로도 세종대왕의 연구는 계속됐고, 급식을 가르치는 바른소리라는뜻에 급식정음이란책을 편찬하게 되었습니더 행님들~ 허허허허 거 글자가 있으니까 오지게 편한부분 인정? 옹~인졍~ 앙 기목띠~ 오지는각~ 지리는각~개오지는각이구요~~~~지렸구요~~~오졌구요~~~~아리랑고개를 넘구요~~~~새가 날아들어 지저귀는 각이구요~~~정신을 차리니 나는 도원향에 와있구요~~~~신선들이 놀음하고 복숭아꽃 만발하구오 오지구요!~~~구라에 무릎을 탁! 치고 갑니다~~대박 중박 소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오지고 지리고 레리꼬 니똥꼬에 알파고 비벼머꼬~~~ 오져따리 오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~드립이 후진게 후지산급~~~ 이거레알 반박불가 빼박캔트 버벌진트인 부분~~~ 팩트체크들어가 샘오취리도 놀라서 에취하고요~~ 내 드립 오지는 부분 실화냐? 충격실화 감동실화인 부분 ㅇㅈ? ㅇㅇㅈ~~~지리구욘~오지구욘~토르비욘~대박중박소박 명박이도 ㅇㅈ하는각 지렷고 오졋꼬 레리꼬 니똥꼬에 알파고 비벼머꼬~~~~ㅋㅋㅋ 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~ㅋㅋㅋㅋㅋ 드립이 후진게 후지산급~~~~ ㅇㅈ합니까? 어 ㅇㅈ~ㅋㅋㅋ 이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인 부분 ㅋㅋㅋ팩트체크들어가니 샘오취리도 놀라서 에취하는부분 지리고요 오지고요 고요고요 고요한 밤이고요 ㅋㅋㅋㅋㅋ내 드립 ㅍㅌㅊ? ㅅㅌㅊ??ㅋㅋㅋㅋㅋ 어 상타치~ ㅋㅋㅋㅋㅋㅋ앙기모띠 디바띠 메르띠! 오지는부분 실화냐? 다큐냐? 인정? 어 린정~개오지는 각이구요 지렸구요 오졌구요 아리랑 고개를 넘구요 새가 날아들어 나에게 지저귀는 각이구요 정신을 차리니 나는 도원향에 와있구요 신선들이 놀음하고 복숭아꽃 만발하구요 오지구요 대박중박소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~샘오취리도 놀라서 에취하고요~~오 이건진심 기타 강타 낙타 나타 난타 넥타 단타 담타 대타 델타 도타 두타 망타 맹타 무타 미타 반타 방타 배타 범타 베타 불타 빈타 스타 안타 애타 여타 연타 유타 의타 이타 자타 장타 조타 질타 차타 추타 출타 취타 치타 태타 통타 투타 피타 한타 해타 화타 환타 결정타 나유타 나프타 대취타 득점타 무안타 방향타 백운타 병살타 보룬타 삼루타 소나타 소취타 승강타 아가타 아미타 아루타 일루타 적시타 치명타 칸타타 구데타 토카타 톱스타 통기타 피에타 희생타 가타부타 내얀안타 단단무타 단봉낙타 보리살타 슈퍼스타 스킬기타 쌍봉낙타 아리에타 아베스타 염불급타 오페레타 자천배타 자행화타 첼레스타 칸초네타 테라코타 풍타낭타 피리칸타 마르나카르타 석유나프타 스피로헤타 트리오소나타 하와이안기타기타 강타 낙타 나타 난타 넥타 단타 담타 대타 델타 도타 두타 망타 맹타 무타 미타 반타 방타 배타 범타 베타 불타 빈타 스타 안타 애타 여타 연타 유타 의타 이타 자타 장타 조타 질타 차타 추타 출타 취타 치타 태타 통타 투타 피타 한타 해타 화타 환타 결정타 나유타 나프타 대취타 득점타 무안타 방향타 백운타 병살타 보룬타 삼루타 소나타 소취타 승강타 아가타 아미타 아루타 일루타 적시타 치명타 칸타타 구데타 토카타 톱스타 통기타 피에타 희생타 가타부타 내얀안타 단단무타 단봉낙타 보리살타 슈퍼스타 스킬기타 쌍봉낙타 아리에타 아베스타 염불급타 오페레타",
    thumbnail: "dfddsffw"
  },
  {
    id: 3,
    user: {
      isLogin: false, // 로그인 상태 확인
      token: null, // 토큰 저장
      id: null, // db식별 id
      userId: "dkrlxhRL07",
      username: '안세은', // 회원정보 수정
      mobile: '010-2733-8320', // 회원정보 수정, reservation
      thumbnail: null, // 회원정보 수정 초기 값 더미데이터 있으면 좋을듯
      usertype: null, // 사장님인지 확인
      jazzbarId: null, // 사장님인 경우 사용 or 재즈바 선택시 사용
    },
    title: "야 이거 쌌더라",
    content: "오져따리 오져따 대박 중박 소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오지고 지리고 레리꼬 니똥꼬에 알차고 비벼머꼬~~~ 오져따리 오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고여 슭곰발이 인정하는 바입니아~~~ 드립이 후진게 후지산급~~~ 이거레알 반박불가 빼박캔트 버벌진트 버켄스탁인 부분 지리고요~~ 팩트체크들어가 샘오취리도 놀라서 에취하고요~~ 내 드립 오지는부분 실화냐? 충격실화 감동실화인 부분 ㅇㅈ? ㅇㅇㅈ~~~오늘부터 동의~ 어 보감~ 대박중박소박명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 오지고지리고레리꼬 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인 부분 지리고요~오지고지리고렛잇고아리랑고개를넘어새가날아들어좌로인정우로인정뒷구르기인정앞으로인정뒤로인정앞구르기인정옆구르기인정풍차돌리기인정레알마드리드인정공중회전세바퀴후인정따리인정따쿵취따취샘오리취갈취따취ㅇㄱㄹㅇㅃㅂㄱ에바쎄바쌈바디바참치넙치꽁치삼치갈치뭉치면살고흩어지면인정하는각이옵니다!!오졋다리오졋다 이거도 두번보는각인가요~~?개오지는 각이구요~아 오지고 지리고 인정하는 부분이고요~좌로인정 우로인정 앞구르기인정 인정올리지말고 인정내려 인정안해서 후회한다면 후회할시간을 후회하는 각이고요~아리랑 고개를 넘어서 새가 지저귀는 부분이고요~인정하지않는 사람 에바참치꽁치가문의수치~뭉치면살고 흩어지면 삼각사각오각생각생각죽는각입니다요~ 앙구라띠 김구라띠 앙기모찌 앙김치~ 지리구욘~오지구욘~토르비욘~대박중박소박 명박이도 ㅇㅈ하는각 지렷고 오졋꼬 레리꼬 니똥꼬에 알파고 비벼머꼬~~~~ㅋㅋㅋㅋ 오져따리오져따쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~ㅋㅋㅋㅋ 드립이 후진게 후지산급~~~~ㅇㅈ합니까? 어 ㅇㅈ~ㅋㅋㅋㅋ 이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인부분 ㅋㅋㅋ 팩트체크들어가니 샘오취리도 놀라서 애취하는 부분 지리고요 오지고요 고요고요 고요한 밤이고요 ㅋㅋㅋ내트립 ㅍㅌㅊ?ㅅㅌㅊ? ㅋㅋㅋㅋ어상타치~ㅋㅋㅋㅋㅋㅋ앙 기모띠 디바띠 메르띠~! 오지는 부분 실화냐? 다큐냐?인정?어 인정~ 오지는각입니다 전하~ 이거 완전 에바세바참치꽁치넙치뭉치면살고 흩어지면 죽는 각 아니더냐?! 인정하는 부분이옵니다 전하~ 안되겠다! 지금당장 학자들을 모아 집현전을 세우고 오로지 백성들만을 위한 글자를 만들겠노라! 오지는 부분이옵니다 전하~ 오늘따라 바람도 선선한것이 기부니가 기모띠한 부분이로구나. 오지구 지리구 아리랑고개를 넘어 새가 날아들어 지저귀는부분이옵니다~ 오! 그대 표현력이 리얼루다가 상타치로구나! 이름이 무엇이냐?! 아니요 뚱이라고하옵니다. 이놈을 매우쳐라... 내 글자를 한번 만들어봤는데 님들에게 인정받고싶소! 앙상한 나무를 빗대어 앙! 힘찬 물줄기의 기운을 받아 기! 나무를 본따 목! 그리고 짐이 닭띠이기때문에 띠! 이름하여 앙 김옥띠가 되는 부분이오! 띠요용~! 이후로도 세종대왕의 연구는 계속됐고, 급식을 가르치는 바른소리라는뜻에 급식정음이란책을 편찬하게 되었습니더 행님들~ 허허허허 거 글자가 있으니까 오지게 편한부분 인정? 옹~인졍~ 앙 기목띠~ 오지는각~ 지리는각~개오지는각이구요~~~~지렸구요~~~오졌구요~~~~아리랑고개를 넘구요~~~~새가 날아들어 지저귀는 각이구요~~~정신을 차리니 나는 도원향에 와있구요~~~~신선들이 놀음하고 복숭아꽃 만발하구오 오지구요!~~~구라에 무릎을 탁! 치고 갑니다~~대박 중박 소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오지고 지리고 레리꼬 니똥꼬에 알파고 비벼머꼬~~~ 오져따리 오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~드립이 후진게 후지산급~~~ 이거레알 반박불가 빼박캔트 버벌진트인 부분~~~ 팩트체크들어가 샘오취리도 놀라서 에취하고요~~ 내 드립 오지는 부분 실화냐? 충격실화 감동실화인 부분 ㅇㅈ? ㅇㅇㅈ~~~지리구욘~오지구욘~토르비욘~대박중박소박 명박이도 ㅇㅈ하는각 지렷고 오졋꼬 레리꼬 니똥꼬에 알파고 비벼머꼬~~~~ㅋㅋㅋ 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~ㅋㅋㅋㅋㅋ 드립이 후진게 후지산급~~~~ ㅇㅈ합니까? 어 ㅇㅈ~ㅋㅋㅋ 이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인 부분 ㅋㅋㅋ팩트체크들어가니 샘오취리도 놀라서 에취하는부분 지리고요 오지고요 고요고요 고요한 밤이고요 ㅋㅋㅋㅋㅋ내 드립 ㅍㅌㅊ? ㅅㅌㅊ??ㅋㅋㅋㅋㅋ 어 상타치~ ㅋㅋㅋㅋㅋㅋ앙기모띠 디바띠 메르띠! 오지는부분 실화냐? 다큐냐? 인정? 어 린정~개오지는 각이구요 지렸구요 오졌구요 아리랑 고개를 넘구요 새가 날아들어 나에게 지저귀는 각이구요 정신을 차리니 나는 도원향에 와있구요 신선들이 놀음하고 복숭아꽃 만발하구요 오지구요 대박중박소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~샘오취리도 놀라서 에취하고요~~오 이건진심 기타 강타 낙타 나타 난타 넥타 단타 담타 대타 델타 도타 두타 망타 맹타 무타 미타 반타 방타 배타 범타 베타 불타 빈타 스타 안타 애타 여타 연타 유타 의타 이타 자타 장타 조타 질타 차타 추타 출타 취타 치타 태타 통타 투타 피타 한타 해타 화타 환타 결정타 나유타 나프타 대취타 득점타 무안타 방향타 백운타 병살타 보룬타 삼루타 소나타 소취타 승강타 아가타 아미타 아루타 일루타 적시타 치명타 칸타타 구데타 토카타 톱스타 통기타 피에타 희생타 가타부타 내얀안타 단단무타 단봉낙타 보리살타 슈퍼스타 스킬기타 쌍봉낙타 아리에타 아베스타 염불급타 오페레타 자천배타 자행화타 첼레스타 칸초네타 테라코타 풍타낭타 피리칸타 마르나카르타 석유나프타 스피로헤타 트리오소나타 하와이안기타기타 강타 낙타 나타 난타 넥타 단타 담타 대타 델타 도타 두타 망타 맹타 무타 미타 반타 방타 배타 범타 베타 불타 빈타 스타 안타 애타 여타 연타 유타 의타 이타 자타 장타 조타 질타 차타 추타 출타 취타 치타 태타 통타 투타 피타 한타 해타 화타 환타 결정타 나유타 나프타 대취타 득점타 무안타 방향타 백운타 병살타 보룬타 삼루타 소나타 소취타 승강타 아가타 아미타 아루타 일루타 적시타 치명타 칸타타 구데타 토카타 톱스타 통기타 피에타 희생타 가타부타 내얀안타 단단무타 단봉낙타 보리살타 슈퍼스타 스킬기타 쌍봉낙타 아리에타 아베스타 염불급타 오페레타",
    thumbnail: "dfddsffw"
  },
  {
    id: 4,
    user: {
      isLogin: false, // 로그인 상태 확인
      token: null, // 토큰 저장
      id: null, // db식별 id
      userId: "dkrlxhRL07",
      username: '안세은', // 회원정보 수정
      mobile: '010-2733-8320', // 회원정보 수정, reservation
      thumbnail: null, // 회원정보 수정 초기 값 더미데이터 있으면 좋을듯
      usertype: null, // 사장님인지 확인
      jazzbarId: null, // 사장님인 경우 사용 or 재즈바 선택시 사용
    },
    title: "야 이거 알차더라dlvknsvlksdnvldkvndsnvndslkvns;lvknsdvlnksdkvnsdlkvnsdlkvnsdlknvsdlkvn",
    content: "오져따리 오져따 대박 중박 소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오지고 지리고 레리꼬 니똥꼬에 알차고 비벼머꼬~~~ 오져따리 오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고여 슭곰발이 인정하는 바입니아~~~ 드립이 후진게 후지산급~~~ 이거레알 반박불가 빼박캔트 버벌진트 버켄스탁인 부분 지리고요~~ 팩트체크들어가 샘오취리도 놀라서 에취하고요~~ 내 드립 오지는부분 실화냐? 충격실화 감동실화인 부분 ㅇㅈ? ㅇㅇㅈ~~~오늘부터 동의~ 어 보감~ 대박중박소박명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 오지고지리고레리꼬 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인 부분 지리고요~오지고지리고렛잇고아리랑고개를넘어새가날아들어좌로인정우로인정뒷구르기인정앞으로인정뒤로인정앞구르기인정옆구르기인정풍차돌리기인정레알마드리드인정공중회전세바퀴후인정따리인정따쿵취따취샘오리취갈취따취ㅇㄱㄹㅇㅃㅂㄱ에바쎄바쌈바디바참치넙치꽁치삼치갈치뭉치면살고흩어지면인정하는각이옵니다!!오졋다리오졋다 이거도 두번보는각인가요~~?개오지는 각이구요~아 오지고 지리고 인정하는 부분이고요~좌로인정 우로인정 앞구르기인정 인정올리지말고 인정내려 인정안해서 후회한다면 후회할시간을 후회하는 각이고요~아리랑 고개를 넘어서 새가 지저귀는 부분이고요~인정하지않는 사람 에바참치꽁치가문의수치~뭉치면살고 흩어지면 삼각사각오각생각생각죽는각입니다요~ 앙구라띠 김구라띠 앙기모찌 앙김치~ 지리구욘~오지구욘~토르비욘~대박중박소박 명박이도 ㅇㅈ하는각 지렷고 오졋꼬 레리꼬 니똥꼬에 알파고 비벼머꼬~~~~ㅋㅋㅋㅋ 오져따리오져따쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~ㅋㅋㅋㅋ 드립이 후진게 후지산급~~~~ㅇㅈ합니까? 어 ㅇㅈ~ㅋㅋㅋㅋ 이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인부분 ㅋㅋㅋ 팩트체크들어가니 샘오취리도 놀라서 애취하는 부분 지리고요 오지고요 고요고요 고요한 밤이고요 ㅋㅋㅋ내트립 ㅍㅌㅊ?ㅅㅌㅊ? ㅋㅋㅋㅋ어상타치~ㅋㅋㅋㅋㅋㅋ앙 기모띠 디바띠 메르띠~! 오지는 부분 실화냐? 다큐냐?인정?어 인정~ 오지는각입니다 전하~ 이거 완전 에바세바참치꽁치넙치뭉치면살고 흩어지면 죽는 각 아니더냐?! 인정하는 부분이옵니다 전하~ 안되겠다! 지금당장 학자들을 모아 집현전을 세우고 오로지 백성들만을 위한 글자를 만들겠노라! 오지는 부분이옵니다 전하~ 오늘따라 바람도 선선한것이 기부니가 기모띠한 부분이로구나. 오지구 지리구 아리랑고개를 넘어 새가 날아들어 지저귀는부분이옵니다~ 오! 그대 표현력이 리얼루다가 상타치로구나! 이름이 무엇이냐?! 아니요 뚱이라고하옵니다. 이놈을 매우쳐라... 내 글자를 한번 만들어봤는데 님들에게 인정받고싶소! 앙상한 나무를 빗대어 앙! 힘찬 물줄기의 기운을 받아 기! 나무를 본따 목! 그리고 짐이 닭띠이기때문에 띠! 이름하여 앙 김옥띠가 되는 부분이오! 띠요용~! 이후로도 세종대왕의 연구는 계속됐고, 급식을 가르치는 바른소리라는뜻에 급식정음이란책을 편찬하게 되었습니더 행님들~ 허허허허 거 글자가 있으니까 오지게 편한부분 인정? 옹~인졍~ 앙 기목띠~ 오지는각~ 지리는각~개오지는각이구요~~~~지렸구요~~~오졌구요~~~~아리랑고개를 넘구요~~~~새가 날아들어 지저귀는 각이구요~~~정신을 차리니 나는 도원향에 와있구요~~~~신선들이 놀음하고 복숭아꽃 만발하구오 오지구요!~~~구라에 무릎을 탁! 치고 갑니다~~대박 중박 소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오지고 지리고 레리꼬 니똥꼬에 알파고 비벼머꼬~~~ 오져따리 오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~드립이 후진게 후지산급~~~ 이거레알 반박불가 빼박캔트 버벌진트인 부분~~~ 팩트체크들어가 샘오취리도 놀라서 에취하고요~~ 내 드립 오지는 부분 실화냐? 충격실화 감동실화인 부분 ㅇㅈ? ㅇㅇㅈ~~~지리구욘~오지구욘~토르비욘~대박중박소박 명박이도 ㅇㅈ하는각 지렷고 오졋꼬 레리꼬 니똥꼬에 알파고 비벼머꼬~~~~ㅋㅋㅋ 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~ㅋㅋㅋㅋㅋ 드립이 후진게 후지산급~~~~ ㅇㅈ합니까? 어 ㅇㅈ~ㅋㅋㅋ 이거레알 반박불가 빼박캔트 버벌진트 버캔스탁인 부분 ㅋㅋㅋ팩트체크들어가니 샘오취리도 놀라서 에취하는부분 지리고요 오지고요 고요고요 고요한 밤이고요 ㅋㅋㅋㅋㅋ내 드립 ㅍㅌㅊ? ㅅㅌㅊ??ㅋㅋㅋㅋㅋ 어 상타치~ ㅋㅋㅋㅋㅋㅋ앙기모띠 디바띠 메르띠! 오지는부분 실화냐? 다큐냐? 인정? 어 린정~개오지는 각이구요 지렸구요 오졌구요 아리랑 고개를 넘구요 새가 날아들어 나에게 지저귀는 각이구요 정신을 차리니 나는 도원향에 와있구요 신선들이 놀음하고 복숭아꽃 만발하구요 오지구요 대박중박소박 명박이도 ㅇㅈ하는각 지리고요 오지고요 고요고요 고요한 밤이고요 실화냐? 다큐냐? 맨큐냐? 오져따리오져따 쿵쿵따리 쿵쿵따 산기슭이 인정하는 바이고요 슭곰발이 인정하는 바입니다~~~샘오취리도 놀라서 에취하고요~~오 이건진심 기타 강타 낙타 나타 난타 넥타 단타 담타 대타 델타 도타 두타 망타 맹타 무타 미타 반타 방타 배타 범타 베타 불타 빈타 스타 안타 애타 여타 연타 유타 의타 이타 자타 장타 조타 질타 차타 추타 출타 취타 치타 태타 통타 투타 피타 한타 해타 화타 환타 결정타 나유타 나프타 대취타 득점타 무안타 방향타 백운타 병살타 보룬타 삼루타 소나타 소취타 승강타 아가타 아미타 아루타 일루타 적시타 치명타 칸타타 구데타 토카타 톱스타 통기타 피에타 희생타 가타부타 내얀안타 단단무타 단봉낙타 보리살타 슈퍼스타 스킬기타 쌍봉낙타 아리에타 아베스타 염불급타 오페레타 자천배타 자행화타 첼레스타 칸초네타 테라코타 풍타낭타 피리칸타 마르나카르타 석유나프타 스피로헤타 트리오소나타 하와이안기타기타 강타 낙타 나타 난타 넥타 단타 담타 대타 델타 도타 두타 망타 맹타 무타 미타 반타 방타 배타 범타 베타 불타 빈타 스타 안타 애타 여타 연타 유타 의타 이타 자타 장타 조타 질타 차타 추타 출타 취타 치타 태타 통타 투타 피타 한타 해타 화타 환타 결정타 나유타 나프타 대취타 득점타 무안타 방향타 백운타 병살타 보룬타 삼루타 소나타 소취타 승강타 아가타 아미타 아루타 일루타 적시타 치명타 칸타타 구데타 토카타 톱스타 통기타 피에타 희생타 가타부타 내얀안타 단단무타 단봉낙타 보리살타 슈퍼스타 스킬기타 쌍봉낙타 아리에타 아베스타 염불급타 오페레타",
    thumbnail: "dfddsffw"
    },
  ],
  currentBoard: 2,
  review: {
    content: null, // 댓글 CRUD
    point: null, // 댓글 CRUD
  },
 
  BossShowList: [
    {
      id: "01",
      jazzbarId: "01",
      date: "2021-07-01",
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
      content: "blahblahblah",
      showCharge: "20000",
    },
    {
      id: "02",
      jazzbarId: "01",
      date: "2021-07-01",
      time: "20:30-21:30",
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
  barList: [],
  jazzbar: {
    id: 1,
    barName: '개쩌는 쟤즈뺘',
    moblie: '02-123-4567',
    defaultSeat: '20',
    area: '서울 서초구',
    thumbnail: '/resource/배너교체1.png',
    address: '서울 서초구 서초동 몇번지',
    rating: '4.5',
    serviceOption: '1246',
    openTime: '17:00-20:00',
    gpsX: null,
    gpsY: null,
  }, //selected
  barPhoto: [
    
  ],
  reviewList: [],//{}
  myReviewId: null,
  menu: [
    {
      thumbnail: '/resource/배너교체1.png'
    },
    {
      thumbnail: '/resource/배너교체1.png'
    },
    {
      thumbnail: '/resource/배너교체1.png'
    },
    {
      thumbnail: '/resource/배너교체1.png'
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
  },

  
  // 추후 추가 혹은 안쓰는 state의 경우 삭제
};

export default initialState;
