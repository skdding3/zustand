import { useEffect, useState } from "react";
import axios from "axios";

// INTERFACE
interface UserData {
  id: number;
  name: string;
}

const AxiosQuery = () => {
  // STATE
  const [data, setData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // EFFECT
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res: any) => {
        const response = res.data;
        console.log(response);
        setData(response);
        setIsLoading(false);
      })
      .catch((error: any) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <h2>{error}</h2>;

  return (
    <>
      <div className="text-4xl font-bold">AxiosQuery</div>
      <ul className="list-disc p-4">
        {data &&
          data.map((obj) => (
            <li key={obj.id}>
              {obj.id} / {obj.name}
            </li>
          ))}
      </ul>
    </>
  );
};

export default AxiosQuery;
