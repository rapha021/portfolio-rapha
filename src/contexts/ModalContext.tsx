import { ReactNode, createContext, useContext, useState } from "react";

interface IModalProvider {
  children: ReactNode;
}

interface IModalContent {
  title: string;
  ytbEnd: string;
}

interface IModalContext {
  isMounted: boolean;
  SwitchMount: () => void;
  closeModal: () => void;
  openModal: (title: string, ytbEnd: string) => void;
  modalContent: IModalContent;
  isOpen: boolean;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export function ModalProvider({ children }: IModalProvider) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<IModalContent>({
    title: "Loading...",
    ytbEnd: "Loading...",
  });

  function SwitchMount() {
    setIsMounted(!isMounted);
  }

  function closeModal() {
    setIsOpen(false);

    setTimeout(() => {
      SwitchMount();
    }, 500);
  }

  function openModal(title: string, ytbEnd: string) {
    setIsOpen(false);
    SwitchMount();

    setTimeout(() => {
      setIsOpen(true);
    }, 10);
    setModalContent({ title, ytbEnd });
  }

  return (
    <ModalContext.Provider
      value={{
        isMounted,
        SwitchMount,
        isOpen,
        closeModal,
        openModal,
        modalContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
