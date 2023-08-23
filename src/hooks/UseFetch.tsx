import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from 'js-cookie';

type useFetchPops_TP = {
  queryKey: [string]
  endpoint: string
  enabled?: boolean
  select?: ((data: any) => any) | undefined
  onError?: (err: any) => void
  onSuccess?: (err: any) => void
  localization?: boolean
  useCompanyToken?: boolean
  specificToken?: string
}
 function useFetch<T>({ endpoint, enabled, select, queryKey, onError , onSuccess, localization, useCompanyToken , specificToken }: useFetchPops_TP) {
  const user_token = Cookies.get('user_token')
  const company_token = Cookies.get('company_token')
  const token = specificToken ? specificToken : useCompanyToken ? company_token : user_token;
  const authorizationHeader = `Bearer ${token}`;
  const config = {
    headers: { Authorization: authorizationHeader },
  };
  const query = useQuery<T>({
    queryKey,
    queryFn: () =>
      axios.get(`http://127.0.0.1:8000/api/${endpoint}${localization ? '&localization=en' : ''}` ,config)
        .then((res) => res.data),
    enabled,
    select,
    onError,
    onSuccess
  })
  return query
}

export default useFetch