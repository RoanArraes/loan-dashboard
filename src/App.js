import React, {useState, useEffect} from 'react';
import './styles.scss';
import { LoadingContextProvider } from './context/LoadingContext';
import { UserProvider } from './context/UserContext';

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
          <Main />
        </UserProvider>
      </LoadingContextProvider>
      <Loading loading={loading.show} message={loading.message}/>
    </>
  );
}

export default App;
