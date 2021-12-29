import { arrayBuffer } from "stream/consumers";

export const createCardsArray = (arr: number[][]) => {
  const resultArr = arr
    .map((row, indexY) => {
      return row.map((item, indexX) => {
        return {
          id: `${indexX}_${indexY}`,
          value: item,
          faceUp: false,
          isOpened: false,
        };
      });
    })
    .flat();

  return resultArr;
};
