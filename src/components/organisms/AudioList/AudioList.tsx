import { useAtomValue } from "jotai";

import "./style.css";
import { audioListAtom } from "../../../core/queries/audio";

import { Loader } from "../../atoms/Loader";
import { AudioItem } from "../../molecules/AudioItem";

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

  if (isError || !data?.length) {
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
      <div className="audio-list__body">
        {data.map((audio) => (
          <AudioItem key={audio.id} audioData={audio} />
        ))}
      </div>
    </Container>
  );
};
