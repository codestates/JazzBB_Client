import { useSelector } from "react-redux";
import Sidebar from "../Sidebar";
import './infoupdate.css'

function InfoUpdate(){
    // data = jazzbar 정보 임.
    const data = useSelector((state) => state.reducer.jazzbar);

    return(
        <div>
          <Sidebar></Sidebar> 

          <div className="infowrapper">
            <div className="dummydiv"></div>

            <div className="BIUcontentBox">
                <div className="contentheader">
                  <div className="contentheader-label">정보수정</div>
                  <div className="contentheader-sublabel">매장 정보가 변경된 경우 직접 수정하실 수 있습니다. 서비스에 즉시 반영되는 부분이니 수정에 주의해 주세요</div>
                </div>

                <div className="barName boxop">
                  <div className="barlabel">상호명</div>
                  <div className="barcontents">{data.barName}</div>
                </div>

                <div className="barAddress boxop">
                  <div className="barlabel">소재지</div>
                  <div className="barcontents">{data.address}</div>
                </div>

                <div className="barMobile boxop">
                  <div className="barlabel">연락처</div>
                  <div className="barcontents">{data.mobile}</div>
                </div>

                <div className="defaultSeat boxop">
                  <div className="barlabel">좌석수</div>
                  <div className="barcontents">{data.defaultSeat}</div>
                </div>

                <div className="serviceOption boxop">
                  <div className="barlabel">서비스</div>
                  <div className="barcontents">
                      {/* {data.serviceOption.map(el => <div>{el}</div>)} */}
                  </div>
                  
                </div>

                <div className="changemenu boxop">
                  <div className="barlabel">메뉴</div>
                  <div className="barcontents"></div>
                </div>

                <div className="changebanner boxop">
                  <div className="barlabel">대표이미지</div>
                  <div className="barcontents"></div>
                </div>

            <button className="btnbtnbtn">수정</button>
            {/* 수정버튼 클릭 시 회원가입 후 렌더되는 가게정보입력 페이지로 렌더링.
            입력사항 전부 디폴트 값으로 넘겨주기. */}
            
          </div>

          </div>

         
        </div>
    )
}

export default InfoUpdate;