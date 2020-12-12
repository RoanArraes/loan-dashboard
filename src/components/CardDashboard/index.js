import React from "react";

import {
  Card,
  ImgArea,
  Img,
  Button
} from './styles.js';

export default function CardDashboard({ icon, label, onClickButton }) {
  return (
    <Card>
      <ImgArea>
        <Img src={icon} />
      </ImgArea>
      <Button onClick={onClickButton}>{label}</Button>
    </Card>
  )
}