import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Header from '../../components/Header/Header';
import UserProfile from '../../components/UserProfile/UserProfile';
import Footer from '../../components/Footer/Footer';

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

const override = css`
  display: block;
  margin: 0 auto;
  border-color: rgb(252 121 71);
`;

export default function Profile() {
  const [userInfo, setUserInfo] = useState([]);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const id = localStorage.getItem('user-id');


  async function getUserInfo() {
    setIsUserLoading(true)
    try {
      await api.get('/userInfo', {
        headers: {
          id: id,
        }
      })
      .then(function(response) {
          setIsUserLoading(false);
          if(response.status === 200) {
            toast.success('User info loaded successfully !')
            setUserInfo(response.data);
          }
      })
    } catch (error) {
      if(error.response.status === 400) {
        toast.error(error.response.data.error);
      }
    }
  } 
  
  useEffect(() => {
    getUserInfo()
  }, [id])


  return(
    <>
      <Header />

      <div className="sweet-loading">
        <ClipLoader
        css={override}
        size={100}
        color={"rgb(252,121,71)"}
        loading={isUserLoading}
        />
      </div>

      <div className="container-user-info">
        {!isUserLoading}

        <UserProfile 
        user={userInfo}
        />

      </div>

      <Footer />

      <ToastContainer />
    </>
  )
}