import React,{ useState } from 'react';

const UserContext = React.createContext();

function UserProvider({
  children
}) 
{
  const [user, setUser] = useState(null)

  const value = {
    user: user,
    updateUser: (newUser)=> updateUser(newUser)
  }

  function updateUser(newUser) {
    setUser(newUser)
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