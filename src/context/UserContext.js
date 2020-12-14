import React,{ useState, useContext, useEffect } from 'react';

import LoadingContext from '../context/LoadingContext';

import { getUser } from "../services/api";

const UserContext = React.createContext();

function UserProvider({
  children
}) 
{
  const loading = useContext(LoadingContext);
  const [user, setUser] = useState(null)

  const value = {
    user: user
  }

  useEffect(()=> {
    if(loading && loading.showLoading) {
      getUserDashboard();
    }
  }, [])

  async function getUserDashboard() { 
		loading.showLoading('Carregando dados do usuário ...');
		const response = await getUser(); 
		if(response) {
			setUser(response);
			loading.hideLoading();
		}
		loading.hideLoading();
	} 

  return(
    <UserContext.Provider
      value={value}
    >
        {children}
    </UserContext.Provider>
  )

}

export default UserContext;

export { UserProvider };