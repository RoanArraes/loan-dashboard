import styled from 'styled-components';

import { COLORS, COLORS_RGBA, SIZE_FONTS } from '../../utils';

export const Box = styled.div `
  width: 100%;
  max-width: 500px;
  min-width: 280px;
  min-height: 500px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: ${COLORS.basic0};
  box-shadow: 0px 0px 8px -3px rgba(0,0,0,0.75);
`;

export const BoxHeader = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.basic2};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid ${COLORS_RGBA.basic4_01};
`;

export const BoxContent = styled.div `
  width: 100%;
  max-height: 500px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  overflow-y: auto;
`;

export const Title = styled.div `
  color: ${COLORS.basic0};
  font-size: ${SIZE_FONTS.h3};
  text-transform: uppercase;
  font-family: 'Raleway-Bold', 'Open-Sans';
  padding: 10px;
  margin-left: auto;
`;

export const Close = styled.span `
  cursor: pointer;
  padding: 0px 15px 5px 0px;
  margin-left: auto;

  img {
    width: 10px;
    height: 10px;
  }
`;

export const Content = styled.div `
  width: 100%;
  display: flex;
  padding: 30px;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
`;

export const Line = styled.span `
  width: 100%;
  display: flex;
  font-size: ${SIZE_FONTS.h3};
  font-family: 'WorkSans-Bold', 'Open-Sans';
  color: ${COLORS.basic4};
  flex-wrap: wrap;
`;

export const LineResult = styled.span `
    width: 100%;
    display: flex;
    padding: 0px 0px 20px 5px;
    font-size: ${SIZE_FONTS.h3};
    font-family: 'WorkSans-Regular', 'Open-Sans';
    flex-wrap: wrap;
`;

export const ImgArea = styled.div `
  align-self: flex-end;
  position: absolute;
  box-shadow: 0px 0px 8px -3px rgba(0,0,0,0.75);
`;