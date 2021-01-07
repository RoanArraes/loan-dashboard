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

import {UserPhotoSquared} from '../';
import {CARD_LABELS} from "../../utils";
import IconClose from "../../assets/icons/icon-close.svg";

export default function BoxAreaDetails({card, onClickClose}) {
  const{user} = useContext(UserContext)
  return(
    <Box>
      <BoxHeader>
        <Title>{card} do empréstimo</Title>
        <Close onClick={()=> onClickClose()}><img src={IconClose} alt="close-details" /></Close>
      </BoxHeader>
      <BoxContent>
        {card === CARD_LABELS.DETALHES &&
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
        }
        {card === CARD_LABELS.PARCELAS &&
          <Content>
            {(user && user.installments.length > 0) &&
              user.installments.map((i, idx) => {
                return (
                  <div key={idx}>  
                    <Line>Parcela {(idx+1).toString()}</Line>
                    <LineResult style={{paddingBottom: '0px'}}>{i.formatedValue}</LineResult>
                    <LineResult style={{paddingBottom: '0px'}}>Vencimento: {i.dueDate}</LineResult>
                    <LineResult>Paga: {i.payd ? 'Sim' : 'Não'}</LineResult>
                  </div>
                )
              })
            }
          </Content>
          }
          {card === CARD_LABELS.JUROS &&
            <Content>
              {(user && user.installments.length > 0) &&
                user.installments.map((i, idx) => {
                  let totalValue = parseFloat((parseInt(i.value) - (parseInt(i.value) * (parseInt(user.monthlyInterest)*0.01)))).toFixed(2);
                  return (
                    <div key={idx}>  
                      <Line>Parcela {(idx+1).toString()}</Line>
                      <LineResult style={{paddingBottom: '0px'}}>Valor sem juros: R$ {totalValue}</LineResult>
                      <LineResult style={{paddingBottom: '0px'}}>Valor juros ao mês: {(user.monthlyInterest).toString()+'%'}</LineResult>
                      <LineResult>Valor total da parcela: R$ {i.formatedValue}</LineResult>
                    </div>
                  )
                })
              }
              <Line>Valor total dos juros:</Line>
              <LineResult style={{paddingBottom: '0px'}}>R$ {user && user.installments.length > 0 ? ((user.totalAmountInTaxes * (user.monthlyInterest*0.01)) * user.installments.length).toFixed(2) : ''}</LineResult>
            </Content>
          }
          {card === CARD_LABELS.SUPORTE &&
            <Content>
              {
                <div>
                  <Line>Email para contato:</Line>
                  <LineResult>suporte.dashboard@loandashboard.com.br</LineResult>
                  <Line>Unidade responsável:</Line>
                  <LineResult>Paulista - São Paulo</LineResult>
                </div>
              }
            </Content>
          }
      </BoxContent>
    </Box>
  )
}