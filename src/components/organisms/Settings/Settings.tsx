import { useSetAtom } from "jotai";
import cn from "classnames";

import { isSettingsModalOpen } from "@atoms/Settings";
import { SettingsModal } from "./Modal";

import { ReactComponent as SettingsIcon } from "@assets/settings.svg";
import "./style.css";

type Props = {
  className?: string | string[];
};

export const SettingsButton: React.FC<Props> = ({ className }) => {
  const setIsOpen = useSetAtom(isSettingsModalOpen);

  return (
    <>
      <SettingsModal />
      <div className={cn("settings-button", className)}>
        <button
          type="button"
          className="settings-button__open-button"
          onClick={() => {
            setIsOpen((state) => !state);
          }}
        >
          <SettingsIcon className="settings-button__open-button-icon" />
        </button>
      </div>
    </>
  );
};
