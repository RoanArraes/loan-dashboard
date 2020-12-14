import React from 'react';
import Spinner from 'react-spinkit'; 

import { COLORS } from "../../utils/colors";

import {
  OverlayContent,
  Wrapper,
  Message
} from "./styles";
 
export default function Loading ({ loading, message }) { 
    return loading ? ( 
        <OverlayContent> 
            <Wrapper> 
                <Spinner 
                    name='ball-spin-fade-loader' 
                    fadeIn='none' 
                    color={COLORS.basic1} 
                /> 
                <Message> 
                    {message} 
                </Message> 
            </Wrapper> 
        </OverlayContent> 
    ) : null 
} 