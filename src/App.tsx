import { ChakraProvider, Input, Container } from "@chakra-ui/react";
import Button from "./components/visual/Button";

function App() {
  return (
    <>
      <ChakraProvider>
        <Container>
          <Input type="date" />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
