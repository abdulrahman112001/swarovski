import { Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { t } from "i18next";
import Cookies from 'js-cookie';
import { useMutate } from "../../hooks/useMutate";
import { notify } from "../../utils/notify";
import { DropImage } from "../atoms/DropImage";
import TextField from "../atoms/TextField";
import { SelectFeatureDynamic } from "../molecules/SelectFeatureDynamic";
import { SelectMake } from "../molecules/SelectMake";
import { SelectModel } from "../molecules/SelectModel";
import { useNavigate } from "react-router-dom";

type AddListingFormSchema = {
  title: string;
  description: string;
  mileage: string;
  price: string;
  engine_size: string;
  vin_number: string;
  make_id?: string;
  model_id?: string;
  tag?: unknown[];
  features?: unknown[];
  images?: unknown[];
};

type AddListingForm_TP = {
  title: string,
  description: string,
  mileage: string,
  price: string,
  engine_size: string,
  vin_number: string,
  make_id: string,
  model_id: string,
  tags: string[],
  features: string[],
  images: string[],
  year: string
  // fuel_type_id: string,
  // cylinder_id: string,
  // doors_id: string,
  // condition_id: string,
  // type_id: string,
  // drive_type_id: string,
  // transmission_id: string,
}



const AddListingForm = () => {
   const navigate =  useNavigate()
  const form = useForm<AddListingForm_TP>({
    initialValues: {
      title: '',
      description: '',
      mileage: '',
      year: '',
      price: '',
      engine_size: '',
      vin_number: '',
      make_id: '',
      model_id: '',
      tags: [],
      features: [],
      images: [],

    },
    validateInputOnBlur: true,
    validate: (values) => ({
      title:  values.title.trim() !== '' ? null : t('required'),
      description:  values.description.trim() !== '' ? null : t('required'),
      mileage:  values.mileage.trim() !== '' ? null : t('required'),
      // year:  values.mileage.trim() !== '' ? null : t('required'),
      price: values.price.trim() !== '' ? null : t('required'),
      engine_size: values.engine_size.trim() !== '' ? null : t('required'),
      vin_number: values.vin_number.trim() !== '' ? null : t('required'),
      model_id: values.model_id !== '' ? null : t('required'),
      make_id: values.make_id !== '' ? null : t('required'),
      // tags: values.tags.length && values.tags.length ? null : t('required'),
    }),
  });
  const user_token = Cookies.get('user_token')
  const { mutate, isLoading: mutateLoading } = useMutate({
    mutationKey: user_token ? ['user_cars'] : ['company_cars'],
    endpoint: user_token ? 'user/cars' : 'company/cars',
    formData: true,
    useCompanyToken:!user_token,
    onMutate: () => {
       notify("loading", "_", 'Save', 'saving data', mutateLoading)
      
      },
      onSuccess:()=>{
       notify("success",  `${t("The car has been added successfully")}`, 'saving data')
       navigate('/')
      
       
        
      },
    onError: () => notify('error'),
  })
  return (
    <div className="flex flex-col items-center justify-center p-4 px-2 mb-8 md:items-stretch md:mb-16 md:p-16">
      <h2 className="text-2xl font-bold">{t('Add listing')}</h2>
      <p className="text-mainGray">{t('Ready to jump back in')}</p>
      <div className="mt-5 scrollInDiv">
        <form
          onSubmit={form.onSubmit((values) => {
            console.log("🚀 ~ file: AddListingForm.tsx:99 ~ onSubmit={form.onSubmit ~ values:", values)
            const allFeatures: { [x: string]: any } = Object.entries(values)
              .filter(([key]) => key.includes('feature') && key.includes('id'))
              .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

            const resultObject: { [x: string]: any } = {};

            for (const key in allFeatures) {
              const prefix = key.split('_')[0];
              if (!resultObject[prefix]) {
                resultObject[prefix] = {};
              }
              resultObject[prefix][key] = allFeatures[key];
            }
            const test = Object.values(resultObject).map(features => {
              return features
            })
            const modifiedData = {
              ...values,
              features: test.map((item) => {
                return {
                  feature_id: Object.values(item)[1],
                  feature_list_id: Object.values(item)[0],
                }
              })
            }
            mutate(modifiedData as never)
          })}
          className="grid items-center grid-cols-2 gap-1 md:grid-cols-3 md:gap-3"
        >
          <TextField form={form} name='title' label={`${t("title")}`} className="w-full" />
          <TextField form={form} name='description' label={`${t("description")}`} className="w-full" />
          <TextField form={form} name='mileage' label={`${t("mileage")}`} className="w-full" />
          <TextField form={form} name='price' label={`${t("price")}`} className="w-full" />
          <TextField form={form} name='engine_size' label={`${t("engine size")}`} className="w-full" />
          <TextField form={form} name='vin_number' label={`${t("vin number")}`} className="w-full" />
          {/* <TextField form={form} name='year' label={`${t("year")}`} className="w-full" /> */}
          {/* <SelectTags form={form as never} showLabel /> */}
          <SelectModel form={form} showLabel />
          <SelectMake form={form} showLabel />
          <SelectFeatureDynamic form={form} showLabel />
          <div className="col-span-2 md:col-span-3">
            <div className="grid col-span-1 gap-2 md:grid-cols-2">
              <DropImage<AddListingForm_TP> multi form={form} name='images' title={`${t("images")}`} className="col-span-1" />
            </div>
          </div>
          <Button type="submit" className="flex mt-5 mr-auto bg-mainYellow hover:bg-subYellow text-mainBlue">
            {t('Add')}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default AddListingForm