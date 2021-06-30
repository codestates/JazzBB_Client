import React, { Component } from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';

class Dummy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
   
    // Kakao Login
    responseKakao = () => {
        window.location.assign(process.env.KAKAO_OAUTH_URI)
    };
    

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }


    render() {
        return (
            <div>
                <button onClick={()=> this.responseKakao()}>야 버튼이야</button>
                {/* <KakaoButton
                    jsKey="d5d2b234d7581ef9f9bc2eb3fd250c1e"
                    buttonText="Kakao"
                    // onSuccess={this.responseKakao}
                    // onFailure={this.responseFail}
                    getProfile="true"
                /> */}
            </div>
        );
    }
}


const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`

const KakaoButton = styled(KakaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

export default Dummy ;