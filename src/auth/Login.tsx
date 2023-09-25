import { PasswordInput, Tabs, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { t } from 'i18next';
import Cookies from 'js-cookie';
import CheckFalse from '../components/atoms/icons/checkFalse';
import CheckTrue from '../components/atoms/icons/checkTrue';
import MainButton from '../components/atoms/mainButton';
import SecondaryButton from '../components/atoms/secondaryButton';
import { useMutate } from '../hooks/useMutate';
import { useAuth } from '../utils/auth/AuthProvider';
import { notify } from '../utils/notify';
import { useNavigate } from 'react-router-dom';

export default function Login({ closeLogin }) {
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
  const navigate = useNavigate();

  const { mutate: postData, data } = useMutate({
    endpoint: 'auth/login',
    formData: true,
    mutationKey: ['login'],
    onSuccess: (data: any) => {
      const token = data.data.data.token;

      Cookies.set('user_token', token, { expires: 7 });
      notify('success', '_', `${t('Welcome')}`);
      login(data.data.data.user);
      navigate('/');
      closeLogin(false);
      //   if (toggleModal)
      //     toggleModal()
    },
    onError: (err) => {
      notify('error');
    },
  });

  return (
    <div className='grid gap-2'>
      <form onSubmit={form.onSubmit((values: any) => postData(values))}>
        <TextInput
          placeholder={t('Email address')}
          label={t('Email address')}
          className='grid-direction'
          {...form.getInputProps('email')}
        />
        <PasswordInput
          placeholder={t('Password')}
          label={t('Password')}
          {...form.getInputProps('password')}
        />

        <div className='relative flex w-fit New-input-checked mt-5 mb-3'>
          <input
            type='checkbox'
            className='absolute opacity-0 cursor-pointer'
          />
          <CheckFalse />
          <CheckTrue />

          <p>{t('Keep me signed in.')}</p>
        </div>

        <div>
          <Tabs.Tab value='forgot password' pt='xs' className='forgot-password'>
            <p className='underline' onClick={'HandleForgotPassword'}>
              {t('Forgot your password?')}
            </p>
          </Tabs.Tab>

          <MainButton title={t('sign in')} className='w-full' />
        </div>
      </form>
      <p className='text-center uppercase'>{t('or')}</p>

      {/* <SecondaryButton title="Continue With Google" className="w-full" />
      <SecondaryButton title="Continue With Apple" className="w-full" />
      <SecondaryButton title="Continue With Facebook" className="w-full" /> */}

      <Tabs.Tab value='im new here' className='new-user'>
        <h2 className='uppercase text-[17px] underline'>
          {t('New user? register')}
        </h2>
      </Tabs.Tab>
    </div>
  );
}
