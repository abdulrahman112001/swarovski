import { PasswordInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { t } from 'i18next';

type PasswordInputFieldProps_TP<T> = {
  form: UseFormReturnType<T>
  showConfirm?: boolean
  className?:string
}

export function PasswordInputField<T>({ form, showConfirm , className }: PasswordInputFieldProps_TP<T>) {
  const [visible, { toggle }] = useDisclosure(false);
  return (
      <div className='flex flex-col w-full justify-between gap-x-4 flex-wrap sm:flex-nowrap'>
      <PasswordInput
        label={t("password")}
        visible={visible}
        onVisibilityChange={toggle}
        {...form.getInputProps('password')}
        className={className ? className :'w-[100%] sm:w-[49%]'}
      />
      {
        showConfirm &&
        <PasswordInput
          label={t("password confirmation")}
          visible={visible}
          onVisibilityChange={toggle}
          {...form.getInputProps('password_confirmation')}
          className={className ? className :'w-[100%] sm:w-[49%]'}
        />
      }
      </div>
  );
}