import { useAtom } from "jotai";

import { Modal } from "@components/templates/Modal";
import { isSettingsModalOpen } from "@atoms/Settings";
import ThemeSwitcher from "@components/molecules/ThemeSwitcher";

export const SettingsModal = () => {
  const [isOpen, setIsOpen] = useAtom(isSettingsModalOpen);

  const onModalClose = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Modal
      open={isOpen}
      onCloseClick={onModalClose}
      classNames={{
        backdrop: "settings-modal__backdrop",
        container: "settings-modal",
        content: ["settings-modal__content", "settings-modal-content"]
      }}
    >
      <ThemeSwitcher />
    </Modal>
  );
};
