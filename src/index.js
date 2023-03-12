import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* Chakra Provider */}
      <ChakraProvider resetCSS={true}> 
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);