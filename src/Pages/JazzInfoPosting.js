import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router-dom";
import { setList, typeText, modifySwitch, saveMyId, setShow, setToken, setBoard} from "../Components/redux/new/action";
import Modal from "react-modal";