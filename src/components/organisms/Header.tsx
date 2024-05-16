import { ReactComponent as Logo } from "@assets/Logo.svg";
import { PageWidthContainer } from "@components/molecules/Container";

export function Header() {
  return (
    <header className="flex h-10 w-full tablet:h-[60px]">
      <PageWidthContainer>
        <Logo />
      </PageWidthContainer>
    </header>
  );
}
