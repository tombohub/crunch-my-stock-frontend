import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Container, Input } from "@chakra-ui/react";
import { useState } from "react";

async function getWinnersLosersCount(date: string) {
  const res = await axios.get(
    `http://localhost:5183/api/overnight/winners-losers-count?date=${date}`
  );
  return res.data;
}

export default function Layout() {
  const [date, setDate] = useState("");
  const query = useQuery({
    queryKey: ["todos", date],
    queryFn: () => getWinnersLosersCount(date),
  });

  if (query.isLoading) return "Loading winners losers";
  if (query.isError) return query.error;
  return (
    <>
      <Container>
        <Input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </Container>
      {JSON.stringify(query.data, null, 2)}
    </>
  );
}
