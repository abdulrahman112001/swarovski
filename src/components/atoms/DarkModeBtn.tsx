import { ActionIcon } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { useDark } from '../../hooks/useDark';

export function DarkModeBtn() {
  const {dark  ,toggleColorScheme} = useDark()

return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color"
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
  );
}