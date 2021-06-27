import React, { useState } from 'react';
import LoginPage from '../Pages/LoginPage'

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
        <div>
            <button onClick={this.openModal}> LogIn</button>
            <LoginPage isOpen={this.state.isModalOpen} close={this.closeModal}></LoginPage>
        </div>
    )
}
}

export default Nav;
