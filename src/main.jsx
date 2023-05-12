// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from './App';
// import { ChakraProvider } from '@chakra-ui/react';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
// );

// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

