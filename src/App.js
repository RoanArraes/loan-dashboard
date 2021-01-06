import React, {useState} from 'react';
import { Router } from "@reach/router"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoadingContextProvider } from './context/LoadingContext';
import { UserProvider } from './context/UserContext';

import './styles.scss';

import Main from "./pages/main";
import Loading from "./components/Loading";

function App() {

  const [loading, setLoading] = useState({
    show: false,
    message:'',
    showLoading: (message)=> showLoading(message),
    hideLoading: ()=> hideLoading()
  });

  function showLoading(messageLoading) {
    setLoading({
      show: true,
      message: messageLoading
    });
  }

  function hideLoading() {
    setLoading({
      show: false,
      message: null
    });
  }

  return (
    <>
     <LoadingContextProvider value={loading}>
     <UserProvider>
        <Router>
          <Main exact path="/" />
        </Router>
      </UserProvider>
      </LoadingContextProvider>
      <Loading loading={loading.show} message={loading.message}/>
      <ToastContainer />
    </>
  );
}

export default App;
