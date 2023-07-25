import { ChakraProvider, Input, Container } from "@chakra-ui/react";
import Button from "./components/visual/Button";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Container>
            <Input type="date" />
          </Container>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
