import useSWR from "swr";
import fetcher from "@/libs/fetcher";
const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);
  console.log(data, "this is the user");
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
export default useCurrentUser;
