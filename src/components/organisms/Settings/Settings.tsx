import { ReactComponent as SettingsIcon } from "@assets/settings.svg";
import "./style.css";

export const Settings = () => {
  return (
    <div className="settings">
      <button className="settings__open-button">
        <SettingsIcon className="settings__open-button-icon" />
      </button>
    </div>
  );
};
