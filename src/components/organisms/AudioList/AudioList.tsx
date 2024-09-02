import { useAtomValue } from "jotai";

import { audioListAtom } from "../../../core/queries/audio";

import { Loader } from "../../atoms/Loader";

export const AudioList = () => {
  const { data, isLoading, isError } = useAtomValue(audioListAtom);

  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="audio-list">{children}</div>
  );

  if (isLoading) {
    return (
      <Container>
        <Loader className={"audio-list__loader"} />
      </Container>
    );
  }

  if (isError || !data) {
    return (
      <Container>
        <p className="audio-list__loader">
          Произошла ошибка при загрузке музыки
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="audio-list__body"></div>
    </Container>
  );
};
