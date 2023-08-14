
import { Modal as ModalMant } from '@mantine/core';
import { ReactNode } from 'react';
 
type ModalProps_TP = {
  children:ReactNode
  title?:string
  opened: boolean
  onClose: () => void
}
export function Modal({children,title , opened  , onClose }:ModalProps_TP) {
  return (
    <>
      <ModalMant opened={opened} onClose={onClose} title={title} centered size="lg" className='rtl:text-end ltr:text-start'>
        {children}
      </ModalMant>

    </>
  );
}