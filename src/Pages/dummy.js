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
    responseKakao = (res) => {
        this.setState({
            id: res.profile.id,
            name: res.profile.properties.nickname,
            provider: 'kakao'
        })
        fetch(`${process.env.REACT_APP_DB_HOST}/kakao`, {
            method: 'GET',
            headers: {
              Authorization: res.response.access_token,
             
            },
          })
            .then((res) => res.json())
            .then((res) => localStorage.setItem('token', res.token), 
                  //res- access_token 값을 백엔드에 전달
                  alert('로그인 성공하였습니다'));
        };
    

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }


    render() {
        return (
            <Container>
                <KakaoButton
                    jsKey="d5d2b234d7581ef9f9bc2eb3fd250c1e"
                    buttonText="Kakao"
                    // onSuccess={this.responseKakao}
                    // onFailure={this.responseFail}
                    getProfile="true"
                />
            </Container>
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