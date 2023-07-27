import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Layout />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
