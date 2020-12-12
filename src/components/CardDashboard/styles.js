import styled from 'styled-components';

import { SIZE_FONTS, COLORS, COLORS_RGBA } from '../../utils';

export const Card = styled.div `
  width: 200px;
  height: 300px;
  margin: 20px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  -webkit-box-shadow: 10px 6px 33px -26px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 6px 33px -26px rgba(0,0,0,0.75);
  box-shadow: 10px 6px 33px -26px rgba(0,0,0,0.75);
`;

export const ImgArea = styled.div `
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.span `
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-position:center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid ${COLORS_RGBA.basic4_01};
`;

export const Button = styled.button `
  height: 50px;
  border-radius: 8px;
  font-family: 'WorkSans-Bold';
  font-size: ${SIZE_FONTS.h2};
  background-color: ${COLORS.basic0};
  border: 2px solid ${COLORS.basic3};
  color: ${COLORS.basic3};
  margin: 0px 10px 10px 10px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.basic3};
    color: ${COLORS.basic0};
  }
`;