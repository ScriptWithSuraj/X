import useSWR from "swr";
import fetcher from "@/libs/fetcher";
const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/users/${userId}` : null,
    fetcher
  );
  console.log(data, "this is the user");
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
export default useUser;
