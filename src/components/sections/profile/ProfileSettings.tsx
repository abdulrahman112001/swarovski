import {
  Anchor,
  Breadcrumbs,
  Modal,
  PasswordInput,
  Select,
  TextInput,
} from '@mantine/core';
import { IconChevronDown, IconEyeCheck, IconEyeOff } from '@tabler/icons-react';
import SecondaryButton from '../../atoms/secondaryButton';
import MainButton from '../../atoms/mainButton';
import { useDisclosure } from '@mantine/hooks';

const ProfileSettings = () => {
  const [opened, { open, close }] = useDisclosure(false);
  // bread crumbs
  const items = [
    { title: 'Home', href: '#' },
    { title: 'Profile', href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <div className='container px-4 py-8 mx-auto'>
        <div className='bread-crumbs-style mb-4'>
          <Breadcrumbs separator='>' mt='xs'>
            {items}
          </Breadcrumbs>
        </div>
        <div className='grid h-full'>
          <div>
            <h1>Profile</h1>
            <h2>
              Manage your details, view your tier status and change your
              password
            </h2>

            <div className='profile-shadow px-4 py-8 my-8 rounded-lg gap-4 grid'>
              <h3 className='text-[20px] font-medium'>General Info</h3>
              <div className='grid grid-cols-3 gap-8'>
                <TextInput
                  label='First name'
                  placeholder='first name'
                  className=''
                />
                <TextInput label='Last name' placeholder='first name' />
                <Select
                  label='Preferred language'
                  placeholder='Choose Your Language'
                  rightSection={<IconChevronDown size='1rem' />}
                  rightSectionWidth={30}
                  styles={{ rightSection: { pointerEvents: 'none' } }}
                  data={['العربية', 'English']}
                />
              </div>

              {/* if the data not change <MainButton /> disabled={true} */}
              <MainButton
                title='update info '
                className='uppercase w-max mt-4'
                disabled={false}
              />
            </div>

            <div className='profile-shadow px-4 py-8 my-8 rounded-lg gap-4 grid'>
              <h3 className='text-[20px] font-medium'>Security</h3>
              <div className='grid grid-cols-3 gap-8'>
                <TextInput
                  label='Email'
                  placeholder='lihifa1879@twugg.com'
                  className=''
                  disabled
                />
                <TextInput
                  label='Password'
                  placeholder='**********'
                  type='password'
                  disabled
                />
              </div>

              {/* if the data not change <MainButton /> disabled={true} */}
              <MainButton
                title='change password'
                className='uppercase w-max mt-4'
                disabled={false}
                action={open}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal opened={opened} onClose={close} title='Change password' centered>
        <div className='grid gap-4'>
          <div>
            <PasswordInput
              label='Current password'
              placeholder='Current password'
              visibilityToggleIcon={({ reveal, size }) =>
                reveal ? (
                  <IconEyeOff size={size} />
                ) : (
                  <IconEyeCheck size={size} />
                )
              }
            />
          </div>
          <div>
            <PasswordInput
              label='New password'
              placeholder='New password'
              visibilityToggleIcon={({ reveal, size }) =>
                reveal ? (
                  <IconEyeOff size={size} />
                ) : (
                  <IconEyeCheck size={size} />
                )
              }
            />
          </div>
          <div>
            <PasswordInput
              label='Repeat new password'
              placeholder='Repeat new password'
              visibilityToggleIcon={({ reveal, size }) =>
                reveal ? (
                  <IconEyeOff size={size} />
                ) : (
                  <IconEyeCheck size={size} />
                )
              }
            />
          </div>

          <div className='flex justify-center'>
            <SecondaryButton title='update password' className='uppercase' />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProfileSettings;
