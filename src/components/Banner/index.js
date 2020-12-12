import React from 'react';

import {
  BannerContent,
  Message,
} from './styles.js';

export default function Banner({img, msg1}) {
  return (
    <BannerContent img={img}>
      <Message>"{msg1.msg}" - {msg1.author}</Message>
    </BannerContent>

  )
}