import React, { FC } from "react";
import { ICard } from "../../models/ICard";
import styles from "./index.module.scss";

interface IPropsCard extends ICard {
  children?: React.ReactNode;
  picture: string;
  [x: string]: unknown;
}

const Card: FC<IPropsCard> = ({
  id,
  value,
  faceUp,
  isOpened,
  picture,

  ...restProps
}) => {
  const face = faceUp === true ? "cardUp" : "cardDown";

  return (
    <>
      {isOpened ? (
        <div className={`${styles.component} `}>
          Card: {id} value={value}
          <img src={picture} alt="" />
        </div>
      ) : (
        <div className={`${styles.component} ${styles[face]}`} {...restProps}>
          <div className={`${styles.component} ${styles.front} `}>
            Card: {id} value={value}
            <img src={picture} alt="" />
          </div>
          <div className={`${styles.component} ${styles.back}`}></div>
        </div>
      )}
    </>
  );
};

export default Card;

// по клику пушим массив 2 карточки делаим обоим значение faceUp=true остальные должны стать неактивны и не реагировать на клик
// и сравниваем значение если равны находим по id их в массиве и меняем значение isOpened=true если нет через 2 сек возвращаем faceUp=false
