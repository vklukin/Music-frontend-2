import { PageWidthContainer } from "@components/molecules/Container";
import { Logo } from "@components/atoms/Logo";
import { HeaderNavigation } from "@components/molecules/Header/Navigation";

export function Header() {
  return (
    <header className="flex h-10 w-full tablet:h-[60px]">
      <PageWidthContainer>
        <div className="flex h-full flex-row items-center gap-8 tablet:gap-24">
          <Logo containerStyles="h-[80%]" />
          <HeaderNavigation />
        </div>
      </PageWidthContainer>
    </header>
  );
}
