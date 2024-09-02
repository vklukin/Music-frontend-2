import { atomWithQuery } from "jotai-tanstack-query";

import { Api } from "../configs/api.config";
import { AudioListItem } from "../models/audio";

export const audioListAtom = atomWithQuery(() => ({
  queryKey: ["audio", "list"],
  queryFn: async () => {
    const res = await Api.get<AudioListItem[]>("/audio/list");
    return res.data;
  }
}));
