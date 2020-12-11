import React from 'react';

import {
  BannerContent,
  Message
} from './styles.js';

export default function Banner({img, msg1, msg2}) {
  return (
    <BannerContent img={img}>
      <Message>"{msg1.msg}" - {msg2.author}</Message>
      <Message>"{msg2.msg}" - {msg2.author}</Message>
    </BannerContent>
  )
}