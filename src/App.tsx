import { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import GameField from "./components/GameField";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { arraySource } from "./constansts/arraySource";
import { createCardsArray } from "./utils/createCardsArray";
import { ICard } from "./models/ICard";
import { isWin } from "./utils/isWin";

function App() {
  const arrayCardsStart: ICard[] = createCardsArray(arraySource);
  const [arrayCards, setArrayCards] = useState(arrayCardsStart);
  useEffect(() => {
    if (isWin(arrayCards)) alert("вы победили");
  }, [arrayCards]);

  return (
    <div className="app">
      <Header className="header" />
      <GameField
        className="game-field"
        arrayCards={arrayCards}
        setArrayCards={setArrayCards}
      />
      <Menu className="menu" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
