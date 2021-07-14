import React from "react";
import "../css/footer-terms-pi.css"



function Termspi() {
    return(
    <div className="footer-terms">
        <div className="footer-terms-body">

            <div className="terms-header">
                <div className="terms-header-labelWrapper">
                    <div className="terms-header-label">개인정보처리방침</div>
                    <div className="terms-header-sublabel">재즈바바 서비스를 이용하실 때 알아두어야 하는 약관입니다</div>
                </div>

                <div className="terms-header-btnWrapper">
                    <img className="terms-header-icon" src="/img/resource/icons/outline_arrow_back_ios_black_24dp.png" />
                    <div className="terms-header-btntitle">이전 페이지</div>
                </div>
            </div>

            <div className="terms-body">
                    <div className="terms-body-objects">
                    Team DDH(이하 "회사"라 한다)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령에 따라 이용자의 개인정보를 보호하고,
                    이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립합니다.
                    개인정보처리방침은 이용자가 언제나 쉽게 열람할 수 있도록 서비스 초기화면을 통해 공개하고 있으며
                    관련법령, 지침, 고시 또는 서비스 정책의 변경에 따라 달라질 수 있습니다.
                    </div>
                    <div className="terms-body-objects">
                        <div className="terms-body-title2">1. 개인정보의 수집 및 이용</div>
                        
                        <div className="terms-body-objects-list">
                        회사는 다음과 같이 이용자의 개인정보를 수집합니다. 처리하고 있는 개인정보는 다음의 수집·이용 목적 이외의 용도로는 활용되지 않으며,
                        수집·이용 목적이 변경되는 경우에는 개인정보보호법에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.
                            <ol className="terms-body-objects-list-ol">
                                <li>회원 정보의 수집 및 이용목적, 수집항목, 보유 및 이용 기간은 아래와 같습니다.</li>

                                <table className="tg">
                                    <thead>
                                      <tr>
                                        <th className="tg-6qw1">구분</th>
                                        <th className="tg-6qw1">수집/이용목적</th>
                                        <th className="tg-34fe">수집항목</th>
                                        <th className="tg-6qw1">보유 및 이용기간</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="tg-nrix" rowspan="2">회원관리</td>
                                        <td className="tg-nrix">타사 계정을 이용한 회원 식별,<br />회원제 서비스 제공, 상담 관리</td>
                                        <td className="tg-cly1">* 수집하는 개인정보 : 닉네임, 계정 정보<br />* 제3자로부터 제공받은 개인정보 : 카카오 사용자 ID, 프로필이미지</td>
                                        <td className="tg-cly1" rowspan="2">목적 달성 (회원 탈퇴 등) 후 지체없이 파기<br />(단, 관련법령 및 회사 정책에 따라 별도 보관되는 정보는 예외)</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-nrix">예약 등 서비스를 위한 휴대전화번호 인증</td>
                                        <td className="tg-cly1">휴대전화번호</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-nrix" rowspan="5">서비스 이용</td>
                                        <td className="tg-cly1">결제 카드 등록 및 관리, 결제 처리,<br />본인 명의 결제수단 인증,<br />부정 사용자 차단 및 관리</td>
                                        <td className="tg-cly1">* 카드정보 : 카드번호, 비밀번호 앞 2자리, 유효기간<br />* 본인인증 : CI, 휴대전화번호, 생년월일, 성별, 이름, 내/외국인여부</td>
                                        <td className="tg-cly1">서비스 해지 시 까지 (단, 관련 법령에 따라 보관되는 정보는 예외)<br />* 카드/계좌 정보는 각 기관에 전달 후 별도 저장하지 않음</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-cly1">서비스 진행상황 안내,<br />계약 이행 및 약관 변경 등의 고지</td>
                                        <td className="tg-cly1">휴대전화번호, 카카오 계정에 종속된 이메일주소</td>
                                        <td className="tg-cly1" rowspan="3">목적 달성 (회원 탈퇴 등) 후 지체없이 파기<br />(단, 관련법령 및 회사 정책에 따라 별도 보관되는 정보는 예외)</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-cly1">(휴대전화 본인인증)<br />서비스 제공을 위한 이용자 식별, 인증</td>
                                        <td className="tg-cly1">* 제3자로부터 제공받은 개인정보 :CI, DI, 휴대전화번호, 생년월일, 성별, 이름, 내/외국인여부</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-cly1">회원관리, 불법 및 부정이용방지,<br />서비스 이용 기록의 통계 및 분석,<br />서비스 개선, 신규 서비스 개발</td>
                                        <td className="tg-cly1">수집한 모든 개인정보 항목 및 자동 수집 정보</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-cly1">문의(회원상담, 제휴상담)</td>
                                        <td className="tg-cly1">이메일주소, 휴대전화번호, 이름, 상담내용을 포함하여<br />상담 중 수집한 모든 개인정보 항목 및 자동 수집 정보</td>
                                        <td className="tg-cly1">전자상거래 등에서의 소비자 보호에 대한 법률에 따라<br />3년간 보관</td>
                                      </tr>
                                    </tbody>
                                </table>

                                <li>이용자 정보의 수집 및 이용목적, 수집항목, 보유 기간은 아래와 같습니다.</li>

                                <table className="tg">
                                    <thead>
                                      <tr>
                                        <th className="tg-baqh">구분</th>
                                        <th className="tg-baqh">수집 및 이용 목적</th>
                                        <th className="tg-baqh">수집 항목</th>
                                        <th className="tg-baqh">보유 및 이용기간</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="tg-nrix" rowspan="2">선택적 서비스 이용</td>
                                        <td className="tg-cly1">재즈바바 서비스 이용</td>
                                        <td className="tg-cly1">카카오 계정 정보, 닉네임, 연락처</td>
                                        <td className="tg-cly1">목적 달성(회원탈퇴 등) 후 지체 없이 파기 <br />(단, 관련 법령에 따라 보관되는 정보는 예외)</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-cly1">예약 서비스 이용</td>
                                        <td className="tg-cly1">닉네임, 연락처</td>
                                        <td className="tg-cly1">목적 달성 1영업일 후 파기</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-nrix">회사 내부 정책</td>
                                        <td className="tg-cly1">회원가입 남용(부정 거래) 및서비스 부정 사용(허위 리뷰, 부정 혜택 등)</td>
                                        <td className="tg-cly1">카카오 계정 정보, 닉네임, 연락처</td>
                                        <td className="tg-cly1">회원 탈퇴 후 3년간 보관</td>
                                      </tr>
                                    </tbody>
                                    </table>

                                <li>서비스 이용 과정에서 아래 자동 수집 정보가 생성되어 수집, 저장, 조합, 분석될 수 있습니다.</li>
                                    <ol className="terms-body-objects-list-ol">
                                        <li>IP주소</li>
                                        <li>쿠키</li>
                                        <li>서비스 이용 기록</li>
                                        <li>기기 정보(기기 고유번호, OS, 모델명, 제조사 정보 등)</li>
                                        <li>광고 ID</li>
                                        <li>통신 기록</li>
                                    </ol>

                                <li>
                                    회사는 회원 관리, 불법 및 부정 이용 방지, 서비스 이용 기록 통계 및 분석, 서비스 개선, 신규 서비스 개발 목적으로 수집한 모든 개인정보와 자동 수집 정보를 사용할 수 있습니다.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="terms-body-objects">
                        <div className="terms-body-title2">2. 개인정보 제3자 제공</div>
                        <div className="terms-body-objects-list">
                            회사는 이용자의 개인정보를 개인정보 수집·이용 목적에서 명시한 범위 내에서 사용하며, 이용자의 사전 동의 없이 개인정보 수집·이용 목적 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 제공하지 않습니다.
                            다만, 아래와 같이 양질의 서비스 제공을 위해 이용자의 개인정보를 협력업체와 공유할 필요가 있는 경우에는 제공 받는 자, 제공목적, 제공정보 항목, 이용 및 보유기간 등을 회원에게 고지하여 동의를 구하거나
                            관련법령에 따른 경우는 예외로 합니다.
                            <ol className="terms-body-objects-list-ol">
                                <li>
                                    이용자가 사전에 공개 또는 제3자 제공에 동의한 경우
                                </li>
                                <table className="tg">
                                    <thead>
                                      <tr>
                                        <th className="tg-baqh">제공받는 자</th>
                                        <th className="tg-baqh">제공 목적</th>
                                        <th className="tg-baqh">수집하는 항목</th>
                                        <th className="tg-baqh">보유기간 및 이용기간</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="tg-cly1">가맹업체</td>
                                        <td className="tg-cly1">입점 업체와 예약 이용자의 원활한 거래 진행,서비스 분석과 통계에 따른 혜택 및 맞춤 서비스 제공,민원 처리 등 고객 상담, 고객 관리,서비스 이용에 따른 설문 조사 및 혜택 제공,분쟁 조정을 위한 기록 보존 등</td>
                                        <td className="tg-cly1">휴대전화번호,예약 정보,결제 정보,빅데이터 분석 자료,닉네임</td>
                                        <td className="tg-cly1">재즈바바 회원 탈퇴 시 까지</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-cly1">카드사<br />(삼성/현대/롯데/하나/신한/비씨/AMEX/KB국민/NH농협/VISA/MASTERS/JCB/UNIONPAY)</td>
                                        <td className="tg-cly1">본인 명의 결제 수단 인증, 결제 처리, 부정 이용 방지</td>
                                        <td className="tg-cly1">카드번호,카드 비밀번호 앞 2자리,유효기간(월/년),CI,휴대전화번호, 성별,생년월일</td>
                                        <td className="tg-cly1">카드 등록 해지 시 까지(단, 관련 법령에 따라 보관되는 정보는 예외)</td>
                                      </tr>
                                    </tbody>
                                    </table>
                                <li>
                                    관계 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사 기관의 요구가 있는 경우
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="terms-body-objects">
                        <div className="terms-body-title2">3. 개인정보 처리 위탁</div>
                        <div className="terms-body-object-list">
                            <ol className="terms-body-objects-list-ol">
                                <li>
                                    회사는 원활하고 향상된 서비스를 제공하기 위해서 개인정보 처리 업무를 다른 회사에 위탁할 수 있습니다.
                                    회사는 개인정보 처리 업무 위탁 시 이용자의 개인정보가 안전하게 처리될 수 있도록 관리·감독하며 다른 목적으로 이용자의 개인정보를 처리하지 않도록 제한합니다.
                                </li>
                                <li>
                                    회사는 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.
                                </li>
                                <table className="tg">
                                    <thead>
                                      <tr>
                                        <th className="tg-baqh">수탁업체</th>
                                        <th className="tg-baqh">위탁 업무 내용</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="tg-baqh">나이스페이먼츠(주)</td>
                                        <td className="tg-baqh">전자 결제 처리</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-baqh">카카오(주)</td>
                                        <td className="tg-baqh">카카오 알림톡 서비스</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-baqh">나이스평가정보(주)</td>
                                        <td className="tg-baqh">본인 확인 및 인증</td>
                                      </tr>
                                    </tbody>
                                    </table>
                            </ol>
                        </div>
                    </div>

                    <div className="terms-body-objects">
                        <div className="terms-body-title2">4. 개인정보의 파기절차 및 방법</div>
                        <div className="terms-body-object-list">
                            <ol className="terms-body-objects-list-ol">
                                <li>
                                    회사는 이용자의 개인정보를 원칙적으로 보유·이용기간의 경과, 처리목적 달성, 서비스 이용약관에 따른 계약해지 등 개인 정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                                </li>
                                <li>
                                    이용자로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는
                                    해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
                                    다른 법령에 따라 개인정보를 보관하는 경우는 아래와 같습니다.
                                </li>
                                <table className="tg">
                                    <thead>
                                      <tr>
                                        <th className="tg-baqh">관계법령</th>
                                        <th className="tg-baqh">항목</th>
                                        <th className="tg-baqh">기간</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="tg-nrix" rowspan="3">전자상거래 등에서의 소비자 보호에 관한 법률</td>
                                        <td className="tg-baqh">계약 또는 청약철회 등에 관한 기록</td>
                                        <td className="tg-baqh">5년</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-baqh">대금 결제 및 재화 등의 공급에 대한 기록</td>
                                        <td className="tg-baqh">5년</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-baqh">소비자의 불만 또는 분쟁 처리에 관한 기록</td>
                                        <td className="tg-baqh">3년</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-baqh">위치정보의 보호 및 이용 등에 관한 법률</td>
                                        <td className="tg-baqh">개인 위치 정보에 관한 기록</td>
                                        <td className="tg-baqh">6개월</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-baqh">전자금융거래법</td>
                                        <td className="tg-baqh">전자금융 거래에 관한 기록</td>
                                        <td className="tg-baqh">5년</td>
                                      </tr>
                                      <tr>
                                        <td className="tg-baqh">통신비밀보호법</td>
                                        <td className="tg-baqh">서비스 이용 관련 개인정보(로그)</td>
                                        <td className="tg-baqh">3개월</td>
                                      </tr>
                                    </tbody>
                                    </table>
                                <li>
                                    회사는 1년 동안 회사의 서비스를 이용하지 않은 이용자의 개인정보는 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률 제29조’에 근거하여 이용자에게 사전통지하고 개인정보를 파기하거나 별도로 분리하여 저장합니다.
                                    <br />
                                    - 회사는 개인정보가 파기되거나 분리되어 저장·관리된다는 사실, 서비스 미이용 기간 만료일, 해당 개인정보의 항목을 공지사항, 전자우편 등의 방법으로 미이용 기간 30일 전에 이용자에게 알립니다. 이를 위해 이용자는 회사에게 정확한 연락처 정보를 알리거나 수정하여야 합니다.
                                </li>
                                <li>
                                    개인정보 파기의 절차 및 방법은 다음과 같습니다
                                    <br />
                                    - 파기 절차 : 파기 사유가 발생한 개인정보를 개인정보 보호 책임자의 승인 절차를 거쳐 파기.
                                    <br />
                                    - 파기 방법 : 전자적 형태로 기록된 개인정보는 재생할 수 없는 방법으로 파기, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각등을 통하여 파기.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="terms-body-objects">
                        <div className="terms-body-title2">5. 이용자 및 법정대리인의 권리와 그 행사방법</div>
                        <div className="terms-body-objects-list">
                            <ol className="terms-body-objects-list-ol">
                                <li>
                                    이용자가 직접 자신의 개인정보를 조회, 수정, 삭제하는 것을 원칙으로 하며, 회사는 이를 위한 기능을 제공합니다.
                                </li>
                                <li>
                                    이용자 및 법정대리인은 개인정보의 조회,수정,삭제를 요청할 수 있으며, 회사는 정책에 따라 본인확인 절차를 거쳐 이를 조치하겠습니다.
                                </li>
                                <li>
                                    이용자께서 개인정보의 오류에 대한 정정을 요구하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
                                    또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.
                                </li>
                                <li>
                                    이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다.
                                </li>
                                <li>
                                    타인의 개인정보를 도용한 회원가입의 경우 이용자 자격을 상실하거나 관련 개인정보보호 법령에 의해 처벌 받을 수 있습니다.
                                </li>
                                <li>
                                    이용자는 전자우편, 비밀번호 등에 대한 보안을 유지할 책임이 있으며 제3자에게 이를 양도하거나 대여 할 수 없습니다.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="terms-body-objects">
                        <div className="terms-body-title2">6. 개인정보 자동수집장치의 설치/운영 및 거부에 관한 사항</div>
                        <div className="terms-body-objects-list">
                            <ol className="terms-body-objects-list-ol">
                                <li>
                                    온라인 맞춤형 광고
                                </li>
                                    <ol className="terms-body-objects-list-ol">
                                        <li>
                                            온라인 맞춤형 광고는 이용자의 관심, 흥미, 기호 및 성향 등을 분석/추정한 후 이용자에게 맞춤형으로 제공되는 온라인 광고입니다.
                                        </li>
                                        <li>
                                            회사는 온라인 맞춤형 광고 사업자가 이용자의 광고 ID및 행태정보를 수집하도록 허용하고 있습니다.
                                            <br />
                                            - 광고ID는 모바일 OS사업자가 광고 목적으로 모바일 기기에 부여한 정보(ADID, IDFA)입니다.
                                            <br />
                                            - 행태정보는 앱 사용이력, 구매 및 검색 이력 등에 관한 정보입니다.
                                        </li>
                                        <li>
                                            이용자가 사이트를 방문하거나 앱을 실행할 때 자동 수집되며, 수집·처리하는 광고 사업자는 아래와 같습니다.
                                            <br />
                                            - 구글, 페이스북
                                        </li>
                                        <li>
                                            회사는 온라인 맞춤 광고 제공을 위해 아래와 같이 정보를 제공합니다. 회사는 광고 ID로 개인을 식별할 수 없으며 다른 개인정보를 함께 제공하지 않습니다.
                                            <br />
                                            - 행태정보를 제공받는 자 : (주)카카오
                                            <br />
                                            -제공하는 행테정보의 항목 : 광고 ID
                                            <br />
                                            - 행태정보를 제공받는 자의 이용 목적 : 온라인 맞춤 광고 제공
                                        </li>
                                        <li>
                                            행태정보 수집 및 맞춤형 광고 노출을 원하지 않는 이용자는 아래 방법을 통해 해제할 수 있습니다.
                                            <br />
                                            - Android : 설정 - google - 광고 - 광고 맞춤 설정 해제
                                            <br />
                                            - iOS : 설정 - 개인 정보 보호 - 광고 - 광고 추적 제한 설정
                                        </li>
                                    </ol>
                            </ol>
                        </div>
                    </div>

                    <div className="terms-body-objects">
                        <div className="terms-body-title2">7. 개인정보의 기술적/관리적 보호대책</div>
                        <div className="terms-body-objects-list">
                            회사는 이용자들의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 보호대책을 강구하고 있습니다.
                            <ol className="terms-body-objects-list-ol">
                                <li>
                                    비밀번호의 암호화
                                </li>
                                <li>
                                    해킹 등에 대비한 대책
                                </li>
                                    <ol className="terms-body-objects-list-ol">
                                        <li>
                                            회사는 해킹, 컴퓨터 바이러스 등 정보통신망 침입에 의해 이용자의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다.
                                        </li>
                                        <li>
                                            최신 백신 프로그램을 이용하여 이용자들의 개인정보나 자료가 유출되거나 손상되지 않도록 방지하고 있습니다.
                                        </li>
                                        <li>
                                            만일의 사태에 대비하여 침입차단 시스템을 이용하여 보안에 최선을 다하고 있습니다.
                                        </li>
                                        <li>
                                            민감한 개인정보는 암호화 통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다.
                                        </li>
                                    </ol>
                                <li>
                                    개인정보 처리 최소화 및 교육
                                </li>
                                <li>
                                    개인정보보호 담당부서 운영
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="terms-body-objects">
                        <div className="terms-body-title2">8. 개인정보 보호책임자</div>
                        <div className="terms-body-objects-list">
                            <ol className="terms-body-objects-list-ol">
                                <li>
                                    회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 고객님의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자 및 개인정보보호 담당자를 지정하고 있습니다.
                                </li>
                                <li>
                                    이용자께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보와 관련된 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당자에게 문의하실 수 있습니다.
                                    회사는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                                </li>
                                <table className="tg">
                                    <thead>
                                      <tr>
                                        <th className="tg-0lax">개인정보보호책임자</th>
                                        <th className="tg-0lax">개인정보보호담당자</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="tg-0lax">성명 : 서지민 <br />help@teamddh.com</td>
                                        <td className="tg-0lax">성명 : 김태선 <br />help@teamddh.com</td>
                                      </tr>
                                    </tbody>
                                    </table>
                            </ol>
                        </div>
                    </div>


                    <div className="terms-body-objects">
                        <div className="terms-body-title2">9. 기타 개인정보침해에 대한 신고 및 상담</div>
                        <div className="terms-body-objects-list">
                            이용자는 아래 이 기관에 대해 개인정보 침해에 대한 피해구제 상담 등을 문의하실 수 있습니다. 아래의 기관은 정보기관 소속으로서, 회사의 자체적인 개인정보 불만처리 또는 개인정보 피해구제 결과에 만족하지 못하실 경우, 자세한 도움이 필요하실 경우에는 문의하여 주시기 바랍니다.
                            <table className="tg">
                                <thead>
                                  <tr>
                                    <th className="tg-baqh">담당</th>
                                    <th className="tg-baqh">전화번호</th>
                                    <th className="tg-baqh">URL</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="tg-baqh">개인정보 침해신고센터</td>
                                    <td className="tg-baqh">(국번없이) 118</td>
                                    <td className="tg-baqh"><span>privacy.kisa.or.kr</span></td>
                                  </tr>
                                  <tr>
                                    <td className="tg-baqh">대검찰청 사이버범죄수사단</td>
                                    <td className="tg-baqh">(국번없이) 1301</td>
                                    <td className="tg-baqh"><span>www.spo.go.kr</span></td>
                                  </tr>
                                  <tr>
                                    <td className="tg-baqh">경찰청 사이버안전국</td>
                                    <td className="tg-baqh">(국번없이) 182</td>
                                    <td className="tg-baqh"><span>www.cyber.go.kr</span></td>
                                  </tr>
                                  <tr>
                                    <td className="tg-baqh">전자거래분쟁조정위원회</td>
                                    <td className="tg-baqh">1661-5714</td>
                                    <td className="tg-baqh"><span>www.ecmc.or.kr</span></td>
                                  </tr>
                                </tbody>
                                </table>
                        </div>
                    </div>

                    <div className="terms-body-objects">
                        <div className="terms-body-title2">10. 고지의 의무</div>
                        <div className="terms-body-objects-list">
                            <ol className="terms-body-objects-list-ol">
                                <li>
                                    현 개인정보처리방침은 법령, 정부의 정책 또는 회사 내부정책 등 필요에 의하여 변경될 수 있으며,
                                    내용추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 홈페이지의 ‘공지사항’을 통해 고지할 것입니다.
                                    다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지합니다.
                                </li>
                                <li>
                                    현 개인정보처리방침은 2021년 7월 7일부터 적용되며, 변경 전의 개인정보처리방침은 공지사항을 통해서 확인하실 수 있습니다.
                                     - 공고일자 : 2021년 7월 7일
                                     - 시행일자 : 2021년 7월 7일
                                </li>
                            </ol>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

                

    )
}


export default Termspi;