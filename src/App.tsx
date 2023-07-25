import { ChakraProvider, Input, Container } from "@chakra-ui/react";
import Button from "./components/visual/Button";

import axios from "axios";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <ChakraProvider>
        <Layout />
      </ChakraProvider>
    </>
  );
}

export default App;
