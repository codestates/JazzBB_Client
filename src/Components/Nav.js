import React, { useState } from 'react';
import LoginPage from '../Pages/LoginPage'
import './Nav.css'

// function Nav (){
//     const [isOpen, setOpenClose] =useState(false);
//     const setOpen = setOpenClose(true);
//     const setClose = setOpenClose(false);

class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
      };
    }
    openModal = () => {
      this.setState({ isModalOpen: true });
    };
    closeModal = () => {
      this.setState({ isModalOpen: false });
    };

render(){
    return(
      <div className="navi">
      <img id="navi-logo" src="./resource/jazzbb_logo_black.png" alt="jazzbarbar" />
      <div className="navi-btnWrapper">
          <button className="navi-btn">Search</button>
          <button className="navi-btn" onClick={this.openModal}>Login</button>
          <LoginPage isOpen={this.state.isModalOpen} close={this.closeModal}></LoginPage>
      </div>
  </div>
            
    )
}
}

export default Nav;
