import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Container, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { type WinnersLosersCount } from "../misc/dtos";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL as string;

async function getWinnersLosersCount(date: string) {
  const res = await axios.get<WinnersLosersCount>(
    `${apiBaseUrl}/overnight/winners-losers-count?date=${date}`
  );
  return res.data;
}

async function getLastRecordedDate() {
  const res = await axios.get<string>(
    `${apiBaseUrl}/overnight/last-recorded-date`
  );
  return res.data;
}

export default function Layout() {
  const [date, setDate] = useState("");
  const winnersLosersCountQuery = useQuery({
    queryKey: ["todos", date],
    queryFn: () => getWinnersLosersCount(date),
  });
  const lastRecordedDateQuery = useQuery(
    ["last-recorded-date"],
    getLastRecordedDate
  );

  useEffect(() => {
    if (lastRecordedDateQuery.isSuccess) {
      setDate(lastRecordedDateQuery.data);
    }
  }, [lastRecordedDateQuery.data, lastRecordedDateQuery.isSuccess]);

  if (winnersLosersCountQuery.isLoading)
    return <Text>Loading winners losers</Text>;
  if (winnersLosersCountQuery.isError) return <Text>some kind of error</Text>;
  return (
    <>
      <Container>
        <Input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <Text>Date: {date}</Text>
        <Text>Winners: {winnersLosersCountQuery.data.winnersCount}</Text>
        <Text>Losers: {winnersLosersCountQuery.data.losersCount}</Text>
      </Container>
    </>
  );
}
