import { Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { ReactNode } from 'react';
type AccordionPlusProps_TP = {
    children:ReactNode
    title:string
}
export function AccordionPlus({children,title}:AccordionPlusProps_TP) {
  return (
    <Accordion
      chevron={<IconPlus size="1rem" />}
      styles={{
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(45deg)',
          },
        },
      }}
    >
      <Accordion.Item value={title}>
        <Accordion.Control>{title}</Accordion.Control>
        <Accordion.Panel>{children}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}