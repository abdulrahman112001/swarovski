import { useMantineColorScheme } from '@mantine/core';

export const useDark = () => {
    const { colorScheme  ,toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return {dark , toggleColorScheme}
}
