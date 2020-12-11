
import React from "react";
import {
  MenuContent,
  Logo,
  UserImg,
  UserName,
  UserArea,
  DashBoardName
} from './styles.js';

import { LABELS } from '../../utils/strings.js';

export default function MenuHeader({
  user
}) {
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