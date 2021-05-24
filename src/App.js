import React from 'react'
import Home from './pages/Home'

import { CartProvider } from './contexts/Cart'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
      </CartProvider>
    </div>
  );
}

export default App;
