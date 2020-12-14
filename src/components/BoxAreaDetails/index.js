import React from 'react';

import {
  Box,
  BoxHeader,
  BoxContent,
  Title,
  Close,
  Line,
  LineResult,
  ImgArea,
  Content
} from './styles';

import { UserPhotoSquared } from '../';

import { CARD_LABELS } from "../../utils";

import IconClose from "../../assets/icons/icon-close.svg";

export default function BoxAreaDetails({card, onClickClose, userInfo}) {
  return(
    <Box>
      <BoxHeader>
        <Title>{card} do empréstimo</Title>
        <Close onClick={()=> onClickClose()}><img src={IconClose} alt="close-details" /></Close>
      </BoxHeader>
      <BoxContent>
        {card === CARD_LABELS.DETALHES ?
          <>
            <Content>
              <ImgArea>
                <UserPhotoSquared userPhoto={userInfo.photo} />
              </ImgArea>
              <Line>ID:</Line>
              <LineResult>{userInfo.UserId}</LineResult>
              <Line>Aluno:</Line>
              <LineResult>{userInfo.firstName} {userInfo.lastName}</LineResult>
              <Line>Instituição:</Line>
              <LineResult>{userInfo.institution}</LineResult>
              <Line>Curso:</Line>
              <LineResult>{userInfo.course}</LineResult>
              <Line>Data de Início:</Line>
              <LineResult>{userInfo.startDate}</LineResult>
              <Line>Data de Conclusão:</Line>
              <LineResult>{userInfo.endDate}</LineResult>
              <Line>Valor total do empréstimo:</Line>
              <LineResult>R$ {userInfo.amountTaken}</LineResult>
              <Line>Nº de parcelas:</Line>
              <LineResult>
                {(userInfo && userInfo.installments) ? userInfo.installments.length : '0'}
              </LineResult>
            </Content>
          </>
          : null
        }
      </BoxContent>
    </Box>
  )
}