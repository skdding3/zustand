import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";

// INTERFACE
interface UserData {
  id: number;
  name: string;
}

// DATA FETCHING
const fetchData = async (): Promise<AxiosResponse<UserData[]>> => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};

const ReactQueryExam = () => {
  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<UserData[]>,
    Error
  >("get-name", fetchData);

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

export default ReactQueryExam;
