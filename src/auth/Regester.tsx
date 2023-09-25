import { PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { t } from 'i18next';
import CheckFalse from '../components/atoms/icons/checkFalse';
import CheckTrue from '../components/atoms/icons/checkTrue';
import MainButton from '../components/atoms/mainButton';
import SecondaryButton from '../components/atoms/secondaryButton';
import { useMutate } from '../hooks/useMutate';
import { useAuth } from '../utils/auth/AuthProvider';
import { notify } from '../utils/notify';
export default function Regester() {
  const form = useForm({
    initialValues: {
      email: '',
      //   termsOfService: false,
    },

    validate: {
      //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const { login } = useAuth();

  const { mutate: postData, data } = useMutate({
    endpoint: 'auth/register/customer',
    formData: true,
    mutationKey: ['login'],
    onSuccess: (data: any) => {
      // const token = data.data.data.token;

      // const token = data.data.data.token;
      // Cookies.set("user_token", token, { expires: 7 });

      notify('success', '_', `${t('Welcome')}`);
      login(form.values);
      //   Navigate('/')
      //   if (toggleModal)
      //     toggleModal()
    },
    onError: (err) => {
      notify('error', '', data?.data?.message);
    },
  });

  return (
    <div className='grid gap-2'>
      <form onSubmit={form.onSubmit((values: any) => postData(values))}>
        <TextInput
          placeholder={t('Your Name')}
          label={t('Your Name')}
          {...form.getInputProps('username')}
        />
        <TextInput
          placeholder={t('Email address')}
          label={t('Email address')}
          {...form.getInputProps('email')}
        />
        <TextInput
          placeholder={t('Phone Number')}
          label={t('Phone Number')}
          {...form.getInputProps('mobile')}
        />
        <PasswordInput
          withAsterisk
          label={t('Your password')}
          placeholder={t('Your password')}
          {...form.getInputProps('password')}
        />

        <div className='my-5'>
          <p className='text-[14px]'>
            {t('By registering, you agree to our')}{' '}
            <a href='#' className='underline'>
              {t('Terms & Conditions, Privacy and Cookie Policy.')}
            </a>
          </p>
        </div>
        <div className='flex'>
          <div className='relative flex w-fit New-input-checked'>
            <input
              type='checkbox'
              className='absolute opacity-0 cursor-pointer'
            />
            <CheckFalse />
            <CheckTrue />
          </div>

          <p className='text-[14px] mb-5'>
            {t(
              'Sign up and never miss out on exclusive member rewards, tailored new arrivals and new launches. Unsubscribe at the bottom of our emails.'
            )}
          </p>
        </div>

        <div>
          <MainButton title='Rigister' className='w-full' />
        </div>
      </form>

      {/* <p className='text-center uppercase'>or</p> */}

      {/* <SecondaryButton title='Continue With Google' className='w-full' />
      <SecondaryButton title='Continue With Apple' className='w-full' />
      <SecondaryButton title='Continue With Facebook' className='w-full' /> */}
    </div>
  );
}
