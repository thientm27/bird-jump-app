import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from './Page/Game/Game';
import Ton from './Page/Ton/Ton';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/thientm27/bird-jump-app/main/tonconnect-manifest.json" 
                          actionsConfiguration={{ twaReturnUrl: 'https://t.me/thientm_bot/birdjump' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Ton />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </TonConnectUIProvider>
  );
}

export default App;
