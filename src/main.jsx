// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from './App';
// import { ChakraProvider } from '@chakra-ui/react';

// ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <ChakraProvider>
  //     <App />
  //   </ChakraProvider>
  // </React.StrictMode>,
// );

// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);


