import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layout/MainLayout";
import { MainRouter } from "./router";
const App = () => {
  return (
    <ChakraProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;