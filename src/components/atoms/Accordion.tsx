import { Accordion as AccordionMantine } from '@mantine/core';
import { ReactNode , useState } from 'react';

type AccordionProps_TP = {
    title:string
    children:ReactNode
}
export function Accordion({title ,children}:AccordionProps_TP) {
    const [value, setValue] = useState<string[]>([]);
  return (
    <AccordionMantine  chevronPosition="left"  multiple value={value} onChange={setValue} className='mainShadow p-5 rounded'>
      <AccordionMantine.Item value={title}>
        <AccordionMantine.Control >{title}</AccordionMantine.Control>
        <AccordionMantine.Panel>{children}</AccordionMantine.Panel>
      </AccordionMantine.Item>
    </AccordionMantine>
  );
}