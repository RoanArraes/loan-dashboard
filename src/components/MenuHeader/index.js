
import React, {useContext} from "react";
import UserContext from '../../context/UserContext';

import {
  MenuContent,
  Logo,
  UserImg,
  UserName,
  UserArea,
  DashBoardName
} from './styles.js';

import { LABELS } from '../../utils/strings.js';

export default function MenuHeader(){
  const {user} = useContext(UserContext);
  return (
    <>
      <MenuContent>
        <Logo />
        <DashBoardName>{LABELS.APP_NAME}</DashBoardName>
        <UserArea>
        <UserName>Olá, <p>{user && user.firstName}</p></UserName>
          <UserImg img={user && user.photo}/>
        </UserArea>
      </MenuContent>
    </>
  )
}