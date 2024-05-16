import { PageWidthContainer } from "@components/molecules/Container";
import { Logo } from "@components/atoms/Logo";

export function Header() {
  return (
    <header className="flex h-10 w-full tablet:h-[60px]">
      <PageWidthContainer>
        <Logo />
      </PageWidthContainer>
    </header>
  );
}
