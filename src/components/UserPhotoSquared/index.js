import React from 'react';
import {
  ImageArea,
  Image
} from './styles';


export default function UserPhotoSquared({userPhoto, width, height}) {
  return(
    <ImageArea width={width} height={height}>
      <Image photo={userPhoto} />
    </ImageArea>
  )
}