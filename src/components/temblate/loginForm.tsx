import { Box, Button, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/form';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { useMutate } from '../../hooks/useMutate';
import { useAuth } from '../../utils/auth/AuthProvider';
import { notify } from '../../utils/notify';
import { PasswordInputField } from '../atoms/PasswordInput';
import TextField from '../atoms/TextField';
type LoginForm_TP = {
  email: string,
  password: string
}
type LoginFormProps_TP = {
  toggleModal?: () => void
  useCompanyToken?: boolean
}
export function LoginForm({ toggleModal, useCompanyToken }: LoginFormProps_TP) {
  const navigate = useNavigate();
  const { login } = useAuth()

  const form = useForm<LoginForm_TP>({


    initialValues: {
      email: '',
      password: ''
    },

    validate: (values) => ({
      email: (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email) ? null : 'Invalid email'),
      password: values.password.trim() !== '' && values.password.trim() !== '' ? null : t('required')
    }),
  });
  const { t } = useTranslation()

  const { isLoading, mutate , data  } = useMutate({
    endpoint:useCompanyToken ? 'company/login' : 'user/auth/login',
    formData: true,
    mutationKey: ['login'],
    onSuccess: (data: any) => {
      const token = data.data.data.token
      useCompanyToken ?
        Cookies.set('company_token', token, { expires: 7 })
        :
        Cookies.set('user_token', token, { expires: 7 })

      notify('success', "_", `${t('Welcome')}`)
      login(form.values)
      navigate('/')
      if (toggleModal)
        toggleModal()
    },
    onError: (err) => {
      notify('error', err?.response.data.message , 'الشركه غير مفعلة بعد' , err?.response.data.message )
    },
    useCompanyToken
  })
  return (
    <Box maw={300} mx="auto" py={200}>
      <form
        onSubmit={form.onSubmit((values) => {
          mutate(values as never)
        })}
      >
        <div className='grid grid-cols-1' >
          <TextField form={form} name='email' className='w-full' />

          <PasswordInputField<LoginForm_TP> form={form} className='w-full' />
        </div>
        <Button type="submit" className="flex mt-5 mr-auto bg-mainYellow hover:bg-subYellow text-mainBlue">
          {t('Log in')}
        </Button>
        <LoadingOverlay visible={isLoading} overlayBlur={1} />
      </form>
    </Box>
  );
}