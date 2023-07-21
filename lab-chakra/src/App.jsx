import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./resources/themes/index.js";
import Header from './Components/Header';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  
  )
}

export default App;