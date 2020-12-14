import React from 'react';

const LoadingContext = React.createContext({
  showLoading: ()=> {},
  hideLoading: ()=> {}
})

export const LoadingContextProvider = LoadingContext.Provider;
export const LoadingContextConsumer = LoadingContext.Consumer;

export default LoadingContext;
