import { ICard } from "../models/ICard";

export const isWin = (arr: ICard[]) => {
  return arr.every((item) => item.isOpened === true);
};
