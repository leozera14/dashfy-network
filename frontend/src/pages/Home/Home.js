import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../services/api';

import Header from '../../components/Header/Header'
import UsersList from '../../components/UsersList/UsersList';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
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


export default function Home() {
  let [renderType, setRenderType] = useState('L');

  const [searchInputValue, setSearchInputValue] = useState();

  const [searchUser, setSearchUser] = useState([]);

  const [usersList, setUsersList ] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [usersPerPage] = useState(10);

  const [isUsersListLoading, setIsUsersListLoading] = useState(false);

  const [isSearchUserLoading, setIsSearchUserLoading] = useState(false);

  async function loadUsers() {
    setIsUsersListLoading(true)

    try {
      await api.get('/users')
      .then(function(response) {
        if(response.status === 200) {
          setIsUsersListLoading(false);
          setRenderType('L');
          setUsersList(response.data);
        }
      })
    } catch (error) {
      if(error.response.status === 400) {
        toast.error(error.response.data.error);
      }
    }  
  }

  async function searchForUser(e) {
    e.preventDefault();
    setIsSearchUserLoading(true)

    const data = {
      searchInputValue,
    }

    await api.post('/search', data)
      .then(function (response) {
        setIsSearchUserLoading(false)
        toast.success('Your search was found !')
        setRenderType('S')
        setSearchUser(response.data)
    })
  }

  useEffect(() => {
    loadUsers();
  }, [])

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage; 
  const currentUser = usersList.slice(indexOfFirstUser, indexOfLastUser);
  const currentSearchUser = searchUser.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return(
    <>
      <Header />

      <div className="wrap-form">
        <form onSubmit={(e) => searchForUser(e)} className="form-searchBar"> 
          <SearchBar 
          onChange={(e) => setSearchInputValue(e.target.value)}
          />
        </form>
      </div>

      <div className="sweet-loading">
            <ClipLoader
              css={override}
              size={100}
              color={"rgb(252,121,71)"}
              loading={isUsersListLoading}
            />

            <ClipLoader
              css={override}
              size={100}
              color={"rgb(252,121,71)"}
              loading={isSearchUserLoading}
            />
      </div>

      { renderType === 'L'
      ?
        <div className="wrap-users">
          {!isUsersListLoading}

          <UsersList users={currentUser} />
          <Pagination 
          usersPerPage={usersPerPage} 
          totalUsers={usersList.length}
          paginate={paginate}/>
        </div>

      :
        <div className="wrap-users">
          {!isSearchUserLoading}

          <UsersList users={currentSearchUser} />
          <Pagination 
          usersPerPage={usersPerPage} 
          totalUsers={searchUser.length}
          paginate={paginate}/>
        </div>

      }

      <Footer />

      <ToastContainer />
    </>
  )
}