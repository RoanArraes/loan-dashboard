import React from "react";

import {
  Card,
  ImgArea,
  Img,
  Button
} from './styles.js';

export default function CardDashboard({ icon, label, onClickButton, id }) {
  return (
    <Card>
      <ImgArea>
        <Img src={icon} />
      </ImgArea>
      <Button value={id ? id : label} onClick={(e)=> onClickButton(e)}>{label}</Button>
    </Card>
  )
}