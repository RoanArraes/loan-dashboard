import styled from 'styled-components';

import { COLORS,COLORS_RGBA, SIZE_FONTS } from '../../utils';

export const BannerContent = styled.div `
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS_RGBA.basic3_01};
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px 20px 0px 20px;

  @media screen and (min-width: 1024px) {
    padding: 0px 50px 0px 50px;
  }

  @media screen and (min-width: 1400px) {
    padding: 0px 100px 0px 100px;
  }
`; 

export const Message = styled.span `
  width: 150px;
  font-family: 'Raleway-Regular';
  font-size: ${SIZE_FONTS.h2};
  color: ${COLORS.basic4};
  text-align: center;
  
  @media screen and (max-width: 600px) {
    display: none;
  }
  
  @media screen and (min-width: 1024px) {
    font-size: ${SIZE_FONTS.h3};
  }

  @media screen and (min-width: 1400px) {
    font-size: ${SIZE_FONTS.h4};
    width: 180px;
  }
`;