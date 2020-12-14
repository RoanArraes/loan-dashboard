import styled from "styled-components";

import { COLORS, COLORS_RGBA } from "../../utils/colors";

export const OverlayContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999999;
  background: ${COLORS_RGBA.basic4_05};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Message = styled.span`
  margin-top: 50px;
  color: ${COLORS.basic0};
  font-family: 'Raleway-Regular','Open-Sans';
`;