import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function getWinnersLosersCount(date: string) {
  const res = await axios.get(
    `http://localhost:5183/api/overnight/winners-losers-count?date=${date}`
  );
  return res.data;
}

export default function Layout() {
  const date = "2023-06-09";
  const query = useQuery({
    queryKey: ["todos", date],
    queryFn: () => getWinnersLosersCount(date),
  });
  return <>{JSON.stringify(query.data, null, 2)}</>;
}
