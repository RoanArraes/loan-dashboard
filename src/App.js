import React, {useState} from 'react';
import { Router } from "@reach/router"

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

  let Home = ()=> {
    return (
      <Main />
    )
  }

  return (
    <>
     <LoadingContextProvider value={loading}>
     <UserProvider>
        <Router>
          <Home exact path="/" />
        </Router>
      </UserProvider>
      </LoadingContextProvider>
      <Loading loading={loading.show} message={loading.message}/>
    </>
  );
}

export default App;
