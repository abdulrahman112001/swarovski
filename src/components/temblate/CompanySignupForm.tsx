import { Box, Button, LoadingOverlay } from "@mantine/core"
import { createFormContext, isNotEmpty, useForm } from "@mantine/form"
import { t } from "i18next"
import Cookies from 'js-cookie'
import { Dispatch, SetStateAction, memo } from "react"
import { useMutate } from "../../hooks/useMutate"
import { notify } from "../../utils/notify"
import { DropImage } from "../atoms/DropImage"
import { PasswordInputField } from "../atoms/PasswordInput"
import TextField from "../atoms/TextField"

type FormValues_TP = {
  name: string
  password: string
  email: string
  address: string
  image: string
  phone: string
  featureImage: string
}
export type EditCompany_TP = {
  data: FormValues_TP
}
type CompanySignupFormProps_TP = {
  toggleModal?: () => void
  setBtnState?: Dispatch<SetStateAction<number>>
  editCompany?: EditCompany_TP | undefined
}
const [FormProvider, useFormContext] = createFormContext<FormValues_TP>();
export const CompanySignupForm = memo(({ toggleModal, setBtnState, editCompany }: CompanySignupFormProps_TP) => {
  const form = useForm<FormValues_TP>({
    initialValues: {
      name: editCompany?.data?.name || '',
      password: '',
      email: editCompany?.data?.email || '',
      address: editCompany?.data?.address || '',
      image: '',
      phone: editCompany?.data?.phone || '',
      featureImage: ''
    },

    validate: {
      name: isNotEmpty(`${t('required')}`),
      password: !editCompany ? isNotEmpty(`${t('required')}`) : undefined,
      email: isNotEmpty(`${t('required')}`),
      address: isNotEmpty(`${t('required')}`),
      image: !editCompany ? isNotEmpty(`${t('required')}`) : undefined,
      phone: isNotEmpty(`${t('required')}`),
      featureImage: !editCompany ? isNotEmpty(`${t('required')}`) : undefined,
    },
  });

  const { mutate, isLoading } = useMutate({
    mutationKey: ['company'],
    endpoint: 'company',
    onSuccess: (data: any) => {
      const token = data.data.data.token
      Cookies.set('company_token', token, { expires: 7 });
      notify('success', "_", `${t('Welcome please sign in')}`)
      // if (toggleModal)
      //   toggleModal()
      if(setBtnState)
      setBtnState(4)
    },
    onError: (err) => {
      notify('error', err)
    },
    formData: true
  })
  return (
    <div className='p-4'>
      {
        !editCompany &&
      <span className="">{t('Already have a profile')},<span className="text-blue-900 cursor-pointer" onClick={() => {
        if (setBtnState)
          setBtnState(4)
      }} >{t('Login')}</span></span>
      }
      <Box maw={350} mx="auto">
        <FormProvider form={form}>
          <form
            onSubmit={form.onSubmit((values) => {
              console.log("🚀 ~ file: CompanySignupForm.tsx:83 ~ onSubmit={form.onSubmit ~ values:", values)
              const { featureImage, image, ...newValues } = values
              editCompany ?
                mutate({ ...newValues, _method: 'put' } as never)
                :
                mutate({ ...newValues, image: values.image[0]  ,featureImage: values.featureImage[0], } as never)
            })}
            className="grid items-center justify-center grid-cols-2 gap-x-4"

          >
            <LoadingOverlay visible={isLoading} overlayBlur={2} />

            <TextField form={form} name='name' label='first name' className="w-full my-2" />
            <TextField form={form} name='phone' label='phone' className="w-full my-2" />
            <TextField form={form} name='email' label='Email' className="w-full my-2" />
            {
              !editCompany && (
                <>
                  <PasswordInputField form={form} className="w-full my-2" />
                  <DropImage form={form} name="image" title={`${t("company logo")}`} className="w-full my-2" />
                  <DropImage form={form} name="featureImage" title={`${t("feature image")}`} className="w-full my-2" />
                </>
              )
            }
            <TextField form={form} name='address' label='Address' className="w-full my-2" />

            <Button type="submit" className="flex mt-5 mr-auto bg-mainYellow hover:bg-subYellow text-textBlue">
              {editCompany ? t('update') : t('Signin')}
            </Button>
          </form>
        </FormProvider>
      </Box>
    </div>
  )
})