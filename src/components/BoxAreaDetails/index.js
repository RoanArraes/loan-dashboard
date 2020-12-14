import React, {useContext} from 'react';
import UserContext from '../../context/UserContext';

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

export default function BoxAreaDetails({card, onClickClose}) {

  const {user} = useContext(UserContext)

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
                <UserPhotoSquared userPhoto={user.photo} />
              </ImgArea>
              <Line>ID:</Line>
              <LineResult>{user.UserId}</LineResult>
              <Line>Aluno:</Line>
              <LineResult>{user.firstName} {user.lastName}</LineResult>
              <Line>Instituição:</Line>
              <LineResult>{user.institution}</LineResult>
              <Line>Curso:</Line>
              <LineResult>{user.course}</LineResult>
              <Line>Data de Início:</Line>
              <LineResult>{user.startDate}</LineResult>
              <Line>Data de Conclusão:</Line>
              <LineResult>{user.endDate}</LineResult>
              <Line>Valor total do empréstimo:</Line>
              <LineResult>R$ {user.amountTaken}</LineResult>
              <Line>Nº de parcelas:</Line>
              <LineResult>
                {(user && user.installments) ? user.installments.length : '0'}
              </LineResult>
            </Content>
          </>
          : null
        }
      </BoxContent>
    </Box>
  )
}