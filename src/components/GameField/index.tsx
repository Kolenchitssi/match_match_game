import React from "react";
import { ICard } from "../../models/ICard";
import Card from "../Card";
import styles from "./index.module.scss";
import picture_0 from "../../assets/img/fruit_0.jpg";
import picture_1 from "../../assets/img/fruit_1.jpg";
import picture_2 from "../../assets/img/fruit_2.jpg";
import picture_3 from "../../assets/img/fruit_3.jpg";
import picture_4 from "../../assets/img/fruit_4.jpg";
import picture_5 from "../../assets/img/fruit_5.jpg";

type PropsFooter = {
  className: string;
  arrayCards: ICard[];
  setArrayCards: Function;
};
const arrForCheck: number[] = [];
const arrPicture = [
  picture_0,
  picture_1,
  picture_2,
  picture_3,
  picture_4,
  picture_5,
];

const GameField = (props: PropsFooter) => {
  const { className, arrayCards, setArrayCards } = props;
  return (
    <div className={`${styles.component} ${className}`}>
      {arrayCards.map((card, index) => {
        return (
          <Card
            id={card.id} //! может и не нужно
            index={index}
            value={card.value}
            isOpened={card.isOpened}
            faceUp={card.faceUp}
            key={card.id}
            picture={arrPicture[card.value]}
            onClick={(e: React.SyntheticEvent) => {
              const newArr = [...arrayCards];
              // console.log(e.currentTarget);

              if (arrForCheck.length < 2) {
                arrForCheck.push(index);
                console.log(arrForCheck, arrayCards);
                newArr[index].faceUp = true;
                setArrayCards(newArr);
              } else if (arrForCheck.length === 2) {
                if (
                  newArr[arrForCheck[0]].value ===
                    newArr[arrForCheck[1]].value &&
                  arrForCheck[0] !== arrForCheck[1]
                ) {
                  newArr[arrForCheck[0]].isOpened = true;
                  newArr[arrForCheck[1]].isOpened = true;
                  setArrayCards(newArr);
                  arrForCheck.length = 0;
                } else {
                  newArr[arrForCheck[0]].faceUp = false;
                  newArr[arrForCheck[1]].faceUp = false;
                  setArrayCards(newArr);
                  arrForCheck.length = 0;
                }
              } else {
                newArr[arrForCheck[0]].faceUp = false;
                newArr[arrForCheck[1]].faceUp = false;
                setArrayCards(newArr);
                arrForCheck.length = 0;
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default GameField;
