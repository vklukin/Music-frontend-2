import "./style.scss";

import { Logo } from "@components/atoms/Logo";
import { HeaderNavigation } from "@components/molecules/Header/Navigation";
import { Settings } from "@components/organisms/Settings";
import { PageWidthContainer } from "@components/molecules/Container";

export function Header() {
  return (
    <header className="header">
      <PageWidthContainer styles="header__page-container">
        <div className="haeder__content">
          <Logo containerStyles="header__logo-container" />
          <HeaderNavigation />
        </div>
        <Settings />
      </PageWidthContainer>
    </header>
  );
}
