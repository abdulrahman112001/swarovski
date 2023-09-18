import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

type ModalCOmp_TP = {
  btnText?: React.ReactNode;
  children?: ReactNode;
  size?: number;
  onClose?: any;
  isOpen?: any;
  close?: any;
  action?: any;
  title?: any;
};
export default function ModalCOmp({
  btnText,
  children,
  size,
  onClose,
  isOpen,
  action,
  title,
}: ModalCOmp_TP) {
  return (
    <>
      <Modal
        opened={isOpen}
        onClose={onClose}
        centered
        size={size}
        title={title}
      >
        {children}
      </Modal>
      <div className='flex justify-center items-center' onClick={action}>
        {btnText}
      </div>
    </>
  );
}
