import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";

// INTERFACE
interface UserData {
  id: number;
  name: string;
}

// DATA FETCHING
const fetchData = async (): Promise<AxiosResponse<UserData[]>> => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

const ReactQuery = () => {
  const { isLoading, isFetching, data, isError, error } = useQuery<
    AxiosResponse<UserData[]>,
    Error
  >("get-name", fetchData, {
    refetchInterval: 2000,
    refetchIntervalInBackground: true,
  });

  console.log({ isLoading, isFetching });

  if (isLoading) return <>Loading...</>;
  if (isError || !data) return <>{error?.message || "Error"}</>;

  return (
    <>
      <div className="text-4xl font-bold">ReactQuery</div>
      <ul className="list-disc p-4">
        {data.data.map((obj) => (
          <li key={obj.id}>
            {obj.id} / {obj.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReactQuery;
