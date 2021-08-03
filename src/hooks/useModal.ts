import { useState } from "react";

function useModal(initStatus: boolean) {
  const [isOpen, setOpen] = useState<boolean>(initStatus);

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  const getProps = () => ({
    isOpen,
    onClose: close,
  });

  return {
    isOpen,
    setOpen,
    open,
    close,
    getProps,
  };
}

export default useModal;
