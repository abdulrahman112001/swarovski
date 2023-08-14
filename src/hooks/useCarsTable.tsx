import { Loader } from "@mantine/core";
import { t } from "i18next";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import useFetch from "./useFetch";
type Element = {
  make: string;
  model: string;
  year: string;
  mileage: string;
}
type TableFeature_TP = {
  data:Element[]
}

export const useCarsTable = ({ tablePages, btnState }: { tablePages: number, btnState: number }) => {
  const user_token = Cookies.get('user_token')
  const subBaseEndpoint = user_token ? 'user/cars' : 'company/cars';
  const endpoint = {
    allStatus: subBaseEndpoint,
    active: `${subBaseEndpoint}?status=1`,
    inActive: `${subBaseEndpoint}?status=false`
  }
  const selectedEndpoint = btnState === 1 ? endpoint.allStatus : btnState === 2 ? endpoint.active : btnState === 3 ? endpoint.inActive : ''

  const { data, isLoading, refetch, isRefetching } = useFetch<TableFeature_TP>({
    queryKey: ['all_cars'],
    endpoint: selectedEndpoint,
    useCompanyToken: !user_token,
  })
  useEffect(() => {
    refetch()
  }, [btnState, refetch])
  const elements = data ? data?.data?.map(feature => ({
    make: feature.make,
    model: feature.model,
    year: feature.features.find(item=> item.title === 'year')?.feature_list_name,
    mileage: feature.mileage
  })).slice(0, tablePages) : []
  const ths = (
    <tr>
      <th className="!text-center">{t('make')}</th>
      <th className="!text-center">{t('model')}</th>
      <th className="!text-center">{t('year')}</th>
      <th className="!text-center">{t('mileage')}</th>

    </tr>
  );

  const TableRow = ({ element}:{element:Element}) => (
    <tr key={crypto.randomUUID()}>
      <td className="!text-center">{element.make}</td>
      <td className="!text-center">{element.model}</td>
      <td className="!text-center">{element.year}</td>
      <td className="!text-center">{element.mileage}</td>
    </tr>
  );

  const rows = isRefetching ? (
    <Loader color="#0A2357" className="h-[200px] flex justify-center items-center w-[50px] mx-auto" />
  ) : (
    elements.map((element) => <TableRow element={element} />)
  );

  return { ths, rows, isLoading }
}
