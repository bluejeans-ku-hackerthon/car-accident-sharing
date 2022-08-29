import { atom, selector } from "recoil";

export const leftRatioState = atom({
  key: "leftRatio",
  default: 5,
});

export const rightRatioState = selector({
  key: "rightRatio",
  get: ({ get }) => {
    const leftRatio = get(leftRatioState);

    return 10 - leftRatio;
  },
});

export const resultVideoState = atom({
  key: "resultVideo",
  default: {},
});

export const resultVideoCommentsState = selector({
  key: "resultVideoComments",
  get: ({ get }) => {
    const resultVideo = get(resultVideoState);
    return resultVideo.comments ? resultVideo.comments : {};
  },
});
