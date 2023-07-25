import { Container, Input } from "@chakra-ui/react";
import axios from "axios";

async function fetchWinnersLosersCountData(date: string) {
  const res = await axios.get(
    "http://localhost:5183/api/overnight/winners-losers-count?date=2023-06-09"
  );
  return res.data;
}

export default function Layout() {
  return (
    <Container>
      <Input type="date" />
    </Container>
  );
}
