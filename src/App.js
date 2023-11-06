import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meal/Meals';
import Cart from './components/Cart/Cart';
import CardProvider from './store/CardProvider';
function App() {

const [cartIsShown , setCardIsShown] = useState(false);

const showCardHandler = (props) => {
  setCardIsShown(true);
}

const hideCardHandler = (props) => {
  setCardIsShown(false);
}

  return (
    <CardProvider>
      {cartIsShown && <Cart onClose ={hideCardHandler}/>}
      <Header onShowCard={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
