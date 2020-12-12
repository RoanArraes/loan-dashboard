import styled from 'styled-components';

import LogoWhite from '../../assets/icons/logo-white.svg';

import { COLORS, SIZE_FONTS }  from '../../utils';

export const MenuContent = styled.div `
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
  background-color: ${COLORS.basic4};
`;

export const Logo = styled.span `
  width: 80px;
  height: 40px;
  background-image: url(${LogoWhite});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const UserArea = styled.span `
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const UserImg = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid ${COLORS.basic0};
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

export const UserName = styled.span `
  color: ${COLORS.basic0};
  font-size: ${SIZE_FONTS.h1};
  margin-right: 10px;
  align-self: flex-end;
  font-family: 'WorkSans-Regular';

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const DashBoardName = styled.span `
  color: ${COLORS.basic0};
  font-size: ${SIZE_FONTS.h4};
  text-transform: uppercase;
  font-family: 'WorkSans-Bold';
  align-self: center;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;