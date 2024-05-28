import { ReactComponent as SettingsIcon } from "@assets/settings.svg";

export const Settings = () => {
  return (
    <div data-testid="settings">
      <button className="flex size-10 place-items-center">
        <SettingsIcon className="size-full fill-main dark:fill-dark-main" />
      </button>
    </div>
  );
};
