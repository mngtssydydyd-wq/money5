import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

function Modal({ isOpen, onClose, title, url }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      window.open(url, '_blank');
      onClose();
    }
  }, [isOpen, url, onClose]);

  return null;
}

export default Modal;
