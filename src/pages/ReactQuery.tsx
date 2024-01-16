import { useMutation, useQuery, useQueryClient } from "react-query";
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

const postData = async (data: object) => {
  return await axios.post("https://jsonplaceholder.typicode.com/posts", data);
};

const useAddPost = () => {
  return useMutation(postData);
};

const ReactQuery = () => {
  // SIDE EFFECT
  const onSuccess = (data: any) => {
    console.log("데이터 가져오기 후 사이드 이펙트 수행", data);
  };

  const onError = (error: any) => {
    console.log("오류 발생 후 사이드 이펙트 수행", error);
  };

  // useQuery
  const { isLoading, isFetching, data, isError, error, refetch } = useQuery<
    AxiosResponse<UserData[]>,
    Error
  >("get-name", fetchData, {
    onSuccess: onSuccess,
    onError: onError,
    staleTime: 5000, // 지정된 fresh 상태를 통해 refetching이 되지 않는다.
    // refetchOnMount: false, // 첫 구성요소 마운트 refetching
    // refetchOnWindowFocus: false,
  });

  // useMutation
  const { mutate } = useAddPost();

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) return <>Loading...</>;
  if (isError || !data) return <>{error?.message || "Error"}</>;

  return (
    <>
      <div className="text-4xl font-bold">ReactQuery</div>
      <button
        onClick={() => refetch()}
        className="py-2 px-4 border bg-slate-100 rounded-md"
      >
        fetch data
      </button>
      <button onClick={mutate}>mutate</button>
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
